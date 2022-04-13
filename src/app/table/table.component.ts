import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  accounts: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  async getData() {
    this.accounts = await this.dataService.getData();
  }
  ngOnInit(): void {
    this.getData();
  }
}
