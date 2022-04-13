import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  configUrl =
    'https://mockend.com/rawmediamarketing/vue-assignment-api/accounts';
  accounts: any;

  constructor(private http: HttpClient) {}

  getData() {
    this.http.get(this.configUrl).subscribe((data: any) => {
      this.accounts = data;
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
