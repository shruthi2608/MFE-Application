import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ChecklistComponent } from './checklist/checklist.component';
const MFEAPPURL ='http://localhost:4300/remoteEntry.js';
const MFE2APPURL='http://localhost:4400/remoteEntry.js';
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'checklist',
    loadChildren:()=>{
        return loadRemoteModule({
            remoteEntry:MFE2APPURL,
            remoteName:"mfeApp2",
            exposedModule:"./ChecklistModule"  
        }).then(m=>m.ChecklistModule).catch(err=>console.log(err));
    }
  },
  {
    path: 'todo-list',  // Ensure this matches your navigation function
    loadChildren:()=>{
        return loadRemoteModule({
            remoteEntry:MFEAPPURL,
            remoteName:"mfeApp",
            exposedModule:"./TodoListModule"

     } ).then(m=>m.TodoListModule).catch(err=>console.log(err));
    },
    
  }
];
