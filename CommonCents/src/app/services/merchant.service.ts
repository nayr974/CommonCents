import { Injectable } from '@angular/core';
import { Merchant } from 'interfaces/merchant';
import { HttpClient } from '@angular/common/http';

// TODO: Create config service
const merchantURL: string =
  'https://staging.guusto.io:8443/merchant/merchant/findAllWithoutLimit';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  constructor(private http: HttpClient) {}

  getMerchantList() {
    return this.http.get<Merchant[]>(merchantURL);
  }
}
