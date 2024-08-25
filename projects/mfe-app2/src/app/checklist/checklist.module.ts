import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChecklistComponent } from './checklist.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path:'',
        component:ChecklistComponent
      }
    ])
  ]
})
export class ChecklistModule { }
