import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from "rxjs";
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/student';
import {MatDialog} from '@angular/material/dialog';
import { UpdateStudentComponent } from '../update-student/update-student.component';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student:any;
  students: any[]=[];
  id:any;
  displayedColumns: string[] = ['name','age','courseFees','actions','edit'];

  constructor(private studentService: StudentService,
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.reloadData();
    this.deleteStudent(this.id);
    }

  reloadData() {
    this.studentService.getStudentList().subscribe(data=>{console.log(data);
    this.students=data;
    });
    
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  studentDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateStudent(id: number) {
    // this.router.navigate(['update', id]);
    let dialogRef=this.dialog.open(UpdateStudentComponent,{data:{studentid:id}});

    dialogRef.afterClosed().subscribe(data => {
      this.reloadData();
    });

  }
}