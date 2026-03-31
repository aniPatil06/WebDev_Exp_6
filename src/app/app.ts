import { Component } from '@angular/core';
import { ItemsComponent } from './items/items';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}