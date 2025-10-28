import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KpInput} from 'custom-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KpInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('demo-app');
}
