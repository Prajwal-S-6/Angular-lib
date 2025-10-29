import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KpInput, KpRadioButton} from 'custom-ui';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KpInput, ReactiveFormsModule, KpRadioButton, MatButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('demo-app');
  fb = inject(FormBuilder);
  myForm!: FormGroup;
  genderOptions = [
    { label: 'Male', value: 'M', checked: true },
    { label: 'Female', value: 'F', checked: false },
    { label: 'Other', value: 'O', checked: false }
  ];

  ngOnInit(): void {
    this.myForm = new FormGroup({
      myName: new FormControl('Prajwal'),
      myGender: new FormControl('M')
    })
  }


  onFormSubmit() {
    console.log(this.myForm);
  }
}
