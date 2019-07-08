import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']

})
export class AddStudentDialogComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fileSelected = null;
  filesMulti = [];
  isshow = true;

  studentsdata ={};

  selectionChange(ev) {
    if (ev.selectedIndex === 2) {
      console.log("hilml");
      const intervalId = setInterval(() => {
        this.isshow = false;
        this.studentsdata = {
          fullname: "ธีระ ทับฤทธิ์",
          id: "1332451006198",
          dateofbirth: "17 สิงหาคม 2553",
          gender: "ชาย",
          fathername: "ธีรศักดิ์ ทับฤทธิ์",
          mothername: "กันทิมา โสภกุล",
          birthplace: "โรงพยาบาลบีเเคร์",
          no: "1",
          doctor: "เเพทย์แผนปัจจุบัน",
          weight: "1360 กรัม",
          fatherid: "3300800165723",
          motherid: "3140200336928"
          
        };
      }, 3000);
    }
  }
    

  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }


  detectFiles(ev) {
      var files: Array<any> =  ev.target.files;
     console.log(files.length);
     if(files){
       this.fileSelected = files[0].name;
      Array.from(files).forEach((file:any) => {
        console.log(file.name);
        this.filesMulti.push(file);
      });

     }
    
  }



}
