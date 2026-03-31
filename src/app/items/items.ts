import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,   // ✅ IMPORTANT
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrls: ['./items.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
  this.items = await this.apiService.getItems();
  this.items = this.items.slice(0, 10);   // ✅ LIMIT TO 10
}
}
