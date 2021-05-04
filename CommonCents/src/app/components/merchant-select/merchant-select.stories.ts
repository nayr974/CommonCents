import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { MerchantSelectComponent } from './merchant-select.component';

import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { SelectComponent } from 'components/select/select.component';
import { InputComponent } from 'components/input/input.component';
import { MerchantComponent } from 'components/merchant/merchant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CallbackPipe } from 'pipes/callback.pipe';

export default {
  title: 'Components/MerchantSelect',
  component: MerchantSelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        SelectComponent,
        InputComponent,
        MerchantComponent,
        CallbackPipe,
      ],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        NzSelectModule,
        NzInputModule,
        NzIconModule,
        NzCardModule,
        NzGridModule,
        NzImageModule,
        NzTypographyModule,
        NzButtonModule,
        NzSkeletonModule,
      ],
    }),
  ],
};

const Template: Story<MerchantSelectComponent> = (args: any) => ({
  component: MerchantSelectComponent,
  props: args,
  template: `<app-merchant-select [loading]="loading" [options]="options" [merchantList]="merchantList"></app-merchant-select>`,
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Guusto Card', value: 'GUUSTO' },
    { label: 'Coffee', value: 'COFFEE' },
    { label: 'Drink', value: 'DRINK' },
    { label: 'Shopping', value: 'SHOPPING' },
  ],
  merchantList: [
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
    {
      id: 28,
      name: 'Academic',
      description: 'Academic',
      image: 'http://images.guusto.com/guusto/img/28.png',
      status: false,
      minAmount: 10.0,
      maxAmount: 500.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'http://www.stormcrowalehouse.com/',
      type: 'DRINK',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'cad',
      currency: 'CAD',
      metadata: {
        styleId: '6843',
      },
    },
    {
      id: 212,
      name: 'Airbnb',
      description: 'Airbnb',
      image: 'http://images.guusto.com/guusto/img/212.png',
      status: true,
      minAmount: 25.0,
      maxAmount: 500.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'https://www.airbnb.com/',
      type: 'SHOPPING',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'usd',
      currency: 'USD',
    },
    {
      id: 126,
      name: 'Air Canada',
      description: 'Air Canada',
      image: 'http://images.guusto.com/guusto/img/126.png',
      status: true,
      minAmount: 25.0,
      maxAmount: 2000.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'https://www.aircanada.com',
      type: 'SHOPPING',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'cad',
      currency: 'CAD',
      metadata: {
        styleId: '87312',
      },
    },
    {
      id: 46,
      name: 'Alice Fazooli`s',
      description: 'Alice Fazooli`s',
      image: 'http://images.guusto.com/guusto/img/46.png',
      status: false,
      minAmount: 10.0,
      maxAmount: 300.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'http://alicefazoolis.ca/',
      type: 'DRINK',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'cad',
      currency: 'CAD',
      metadata: {
        styleId: '131918',
      },
    },
    {
      id: 138,
      name: 'Amazon',
      description: 'Amazon',
      image: 'http://images.guusto.com/guusto/img/138.png',
      status: true,
      minAmount: 5.0,
      maxAmount: 500.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'https://www.amazon.com/',
      type: 'SHOPPING',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'usd',
      currency: 'USD',
    },
    {
      id: 116,
      name: 'Amazon',
      description: 'Amazon',
      image: 'http://images.guusto.com/guusto/img/116.png',
      status: true,
      minAmount: 5.0,
      maxAmount: 1000.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'https://www.amazon.ca/',
      type: 'SHOPPING',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'cad',
      currency: 'CAD',
      metadata: {
        styleId: '52496',
      },
    },
    {
      id: 213,
      name: 'AMC Theatres',
      description: 'AMC Theatres',
      image: 'http://images.guusto.com/guusto/img/213.png',
      status: true,
      minAmount: 10.0,
      maxAmount: 100.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'https://www.amctheatres.com/',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'usd',
      currency: 'USD',
    },
    {
      id: 100,
      name: "America's Coffee",
      description: "America's Coffee",
      image: 'http://images.guusto.com/guusto/img/100.png',
      status: true,
      minAmount: 25.0,
      maxAmount: 1000.0,
      shoppingOption: 'STORE_AND_ONLINE',
      website: 'http://americarestaurant.ca/',
      type: 'COFFEE',
      cardNetwork: 'Gift Card',
      denominations: [],
      country: 'cad',
      currency: 'CAD',
      metadata: {
        styleId: '50005',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = { loading: true };
