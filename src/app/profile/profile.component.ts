import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  private validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder) {
  
    // this.validationMessages = {
    //   uname: {
    //     required: 'Please enter a valid username.'
    //   },
    //   devicetype: {
    //     required: 'Please select your device.'
    //   }
    // };
  }

  ngOnInit():void{
    this.profileForm = this.fb.group({
      fname:[],
      lname:[],
      uname: ['', Validators.required],
      devicetype: ['', Validators.required],
      umail: []
    });
  }

}
