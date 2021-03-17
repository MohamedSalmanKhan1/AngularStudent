import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/student';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: number = 0;
student:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute, private router: Router,
    private studentService: StudentService,
    private dialogRef: MatDialogRef<UpdateStudentComponent>,
    ) { }

  ngOnInit() {
    // this.student = this.data;
    console.log(this.data);

    this.id = this.data.studentid;

    this.studentService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  updateStudent() {
console.log(this.data);
    this.studentService.updateStudent(this.id, this.data)
    .subscribe(data => {
      console.log(data);
      this.student = new Student();
      // this.gotoList();
    });
    
    console.log(this.id, this.student)
    this.studentService.updateStudent(this.id, this.student)
      .subscribe(data => {
        console.log(data);
        this.student = new Student();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStudent();
    this.onClose(); 
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
  onClose(){
    this.router.navigate(['/students']);
    this.dialogRef.close();
  }
}