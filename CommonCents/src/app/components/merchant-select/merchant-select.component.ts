import { Component, Input, OnInit } from '@angular/core';
import { Merchant } from 'interfaces/merchant';
import { Option } from 'interfaces/common';

@Component({
  selector: 'app-merchant-select',
  templateUrl: './merchant-select.component.html',
  styleUrls: ['./merchant-select.component.scss'],
})
export class MerchantSelectComponent implements OnInit {
  @Input()
  loading: boolean = false;

  @Input()
  merchantList: Merchant[] = [];

  @Input()
  options: Option[] = [];

  @Input()
  selectedCategory: string | null = null;

  @Input()
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {}

  setCategory = (value: string) => {
    this.selectedCategory = value;
  };

  setSearchText = (value: string) => {
    this.searchText = value.toLowerCase();
  };

  // Determines if a merchant should be displayed or not based on the search and filter criteria.
  showMerchant = (merchant: Merchant) =>
    (!this.selectedCategory ||
      (this.selectedCategory == 'GUUSTO' && merchant.type == null) ||
      this.selectedCategory == merchant.type) &&
    merchant.name.toLowerCase().includes(this.searchText);

  // Track ngFor changes by element hash
  trackFunction = (index: number, element: any) =>
    element ? element.hash : null;
}
