import { Component, OnInit } from '@angular/core';
import { Merchant } from 'interfaces/merchant';
import { Option } from 'interfaces/common';
import { MerchantService } from 'services/merchant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;

  merchantList: Merchant[] = [];

  options: Option[] = [
    { label: 'Guusto Card', value: 'GUUSTO' },
    { label: 'Coffee', value: 'COFFEE' },
    { label: 'Drink', value: 'DRINK' },
    { label: 'Shopping', value: 'SHOPPING' },
  ];

  constructor(private merchantService: MerchantService) {}

  ngOnInit(): void {
    this.merchantService.getMerchantList().subscribe((data: Merchant[]) => {
      this.merchantList = data;
      this.loading = false;
    });
  }
}
