import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { MerchantService } from 'services/merchant.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockMerchantService: jasmine.SpyObj<MerchantService>;

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
  ];

  beforeEach(async () => {
    mockMerchantService = jasmine.createSpyObj(['getMerchantList']);
    mockMerchantService.getMerchantList.and.returnValue(of(mockMerchantList));

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HomeComponent,
        { provide: MerchantService, useValue: mockMerchantService },
      ],
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loading should be false after init', () => {
    expect(component.loading).toEqual(false, 'loaded');
  });

  it('merchantList should contain values', () => {
    expect(component.merchantList.length).toEqual(1, 'loaded');
  });
});
