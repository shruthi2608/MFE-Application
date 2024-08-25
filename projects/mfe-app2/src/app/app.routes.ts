import { Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'checklist',
        pathMatch:'full'
    },
    {
        path:'checklist',
        component:ChecklistComponent
    }
];
