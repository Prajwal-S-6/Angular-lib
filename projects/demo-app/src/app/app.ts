import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KpInput} from 'custom-ui';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KpInput, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('demo-app');
  fb = inject(FormBuilder);
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      myName: new FormControl('Prajwal')
    })
  }


  onFormSubmit() {
    console.log(this.myForm);
  }
}
