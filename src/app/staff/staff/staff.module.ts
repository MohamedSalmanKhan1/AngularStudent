import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffListComponent } from '../../staff/staff/staff-list/staff-list.component';



@NgModule({
  declarations: [
    StaffListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StaffListComponent
  ]
})
export class StaffModule { }
