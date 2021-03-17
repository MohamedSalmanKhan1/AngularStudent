import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffListComponent } from './staff/staff/staff-list/staff-list.component';
import { CreateStudentComponent } from './student/student/create-student/create-student.component';
import { StudentDetailsComponent } from './student/student/student-details/student-details.component';
import { StudentListComponent } from './student/student/student-list/student-list.component';
import { UpdateStudentComponent } from './student/student/update-student/update-student.component';

const routes: Routes = [

  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: CreateStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
  { path: 'staff', component: StaffListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
