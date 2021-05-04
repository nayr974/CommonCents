import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { MerchantComponent } from './merchant.component';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

export default {
  title: 'Components/Merchant',
  component: MerchantComponent,
  props: {
    merchant: {},
  },
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        NzCardModule,
        NzGridModule,
        NzImageModule,
        NzTypographyModule,
        NzSkeletonModule,
        NzButtonModule,
      ],
    }),
  ],
};

const Template: Story<MerchantComponent> = (args: any) => ({
  component: MerchantComponent,
  props: args,
  template: `<app-merchant [loading]="loading" [merchant]="merchant"></app-merchant>`,
});

export const Default = Template.bind({});
Default.args = {
  merchant: {
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
    order: null,
    metadata: null,
    sort: null,
  },
};

export const Loading = Template.bind({});
Loading.args = { loading: true };
