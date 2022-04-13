import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  configUrl =
    'https://mockend.com/rawmediamarketing/vue-assignment-api/accounts';
  userUrl = '';
  accounts: any;
  account:any
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.userUrl = `https://mockend.com/rawmediamarketing/vue-assignment-api/accounts/${params['id']}`;
    });
  }

  async getData() {
    const res = await firstValueFrom(this.http.get(this.configUrl));
    return res;
  }

  async getUserData() {
    const result = await firstValueFrom(this.http.get(this.userUrl));
    console.log(this.userUrl);
    
    return result;
  }
}
