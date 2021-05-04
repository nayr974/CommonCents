export interface Merchant {
  id: number;
  name: string;
  description: string;
  image: string;
  status: boolean;
  minAmount: number;
  maxAmount: number;
  note?: string;
  shoppingOption: string;
  website: string;
  balanceCheckUrl?: string;
  defaultMessage?: string;
  type?: string;
  cardNetwork: string;
  denominations: number[];
  functionalities?: boolean;
  customMerchant?: boolean;
  country: string;
  currency: string;
  order?: any;
  mastercardAvailable?: boolean;
  fees?: boolean;
  metadata?: any;
  sort?: any;
}
