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
  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute
    ) { }

  async getData() {
    const res = await firstValueFrom(this.http.get(this.configUrl));
    return res;
  }
}
