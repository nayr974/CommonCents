import { of } from 'rxjs';
import { Merchant } from 'interfaces/merchant';
import { MerchantService } from './merchant.service';

describe('MerchantService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: MerchantService;

  // Provide the HTTP Testing Client before each test
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MerchantService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected merchants (HttpClient called once)', () => {
    const expectedMerchants: Merchant[] = [
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

    httpClientSpy.get.and.returnValue(of(expectedMerchants));

    service
      .getMerchantList()
      .subscribe(
        (merchants) =>
          expect(merchants).toEqual(expectedMerchants, 'expected heroes'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
