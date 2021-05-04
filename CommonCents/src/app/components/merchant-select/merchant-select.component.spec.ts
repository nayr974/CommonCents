import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSelectComponent } from './merchant-select.component';

describe('MerchantSelectComponent', () => {
  let component: MerchantSelectComponent;
  let fixture: ComponentFixture<MerchantSelectComponent>;

  let mockMerchantList = [
    {
      id: 297,
      name: '1800Flowers.com',
      description: '1800Flowers.com',
      image: 'http://images.guusto.com/guusto/img/297.png',
      status: true,
      minAmount: 15.0,
      maxAmount: 500.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'https://1800Flowers.com',
      type: 'SHOPPING',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'usd',
      currency: 'USD',
    },
    {
      id: 294,
      name: '1-Hour Time Off',
      description: '1-Hour Time Off',
      image: 'http://images.guusto.com/guusto/img/294.png',
      status: true,
      minAmount: 20.0,
      maxAmount: 20.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'https://guusto.com/blueshore-financial-time-off',
      type: 'DRINK',
      cardNetwork: 'Guusto Card',
      denominations: [1.0, 5.0, 10.0, 25.0, 50.0, 100.0, 250.0, 500.0],
      country: 'cad',
      currency: 'CAD',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MerchantSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('can set category', () => {
    component.setCategory('COFFEE');
    expect(component.selectedCategory).toBe('COFFEE');
    component.setCategory('DRINK');
    expect(component.selectedCategory).toBe('DRINK');
  });

  it('can set category', () => {
    component.setSearchText('star');
    expect(component.searchText).toBe('star');
    component.setSearchText('amaz');
    expect(component.searchText).toBe('amaz');
  });

  it('filter properly applies without search text or category', () => {
    expect(component.showMerchant(mockMerchantList[0])).toBe(true);
    expect(component.showMerchant(mockMerchantList[1])).toBe(true);
  });

  it('filter properly applies with search text', () => {
    component.setSearchText('flowers');
    expect(component.showMerchant(mockMerchantList[0])).toBe(true);
    expect(component.showMerchant(mockMerchantList[1])).toBe(false);
    component.setSearchText('time');
    expect(component.showMerchant(mockMerchantList[0])).toBe(false);
    expect(component.showMerchant(mockMerchantList[1])).toBe(true);
    component.setSearchText('guusto');
    expect(component.showMerchant(mockMerchantList[0])).toBe(false);
    expect(component.showMerchant(mockMerchantList[1])).toBe(false);
  });

  it('filter properly applies with category set', () => {
    component.setCategory('SHOPPING');
    expect(component.showMerchant(mockMerchantList[0])).toBe(true);
    expect(component.showMerchant(mockMerchantList[1])).toBe(false);
    component.setCategory('DRINK');
    expect(component.showMerchant(mockMerchantList[0])).toBe(false);
    expect(component.showMerchant(mockMerchantList[1])).toBe(true);
    component.setCategory('GUUSTO');
    expect(component.showMerchant(mockMerchantList[0])).toBe(false);
    expect(component.showMerchant(mockMerchantList[1])).toBe(false);
  });

  it('filter properly applies with category and search text set', () => {
    component.setCategory('SHOPPING');
    component.setSearchText('flowers');
    expect(component.showMerchant(mockMerchantList[0])).toBe(true);
    expect(component.showMerchant(mockMerchantList[1])).toBe(false);
    component.setCategory('DRINK');
    expect(component.showMerchant(mockMerchantList[0])).toBe(false);
    expect(component.showMerchant(mockMerchantList[1])).toBe(false);
    component.setSearchText('time');
    expect(component.showMerchant(mockMerchantList[0])).toBe(false);
    expect(component.showMerchant(mockMerchantList[1])).toBe(true);
    component.setSearchText('1');
    expect(component.showMerchant(mockMerchantList[0])).toBe(false);
    expect(component.showMerchant(mockMerchantList[1])).toBe(true);
    component.setCategory('');
    expect(component.showMerchant(mockMerchantList[0])).toBe(true);
    expect(component.showMerchant(mockMerchantList[1])).toBe(true);
  });
});
