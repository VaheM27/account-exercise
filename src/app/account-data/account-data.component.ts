import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss'],
})
export class AccountDataComponent implements OnInit {
  account: any;
  configUrl: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe((params) => {
      this.configUrl = `https://mockend.com/rawmediamarketing/vue-assignment-api/accounts/${params['id']}`;
    });
  }
  async getUserData() {
    await this.http.get(this.configUrl).subscribe((data: any) => {
      this.account = data;
    });
  }
  ngOnInit(): void {
    this.getUserData();
  }
}
