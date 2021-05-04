import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { SelectComponent } from './select.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

export default {
  title: 'Components/Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [SelectComponent],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        NzSelectModule,
        NzSkeletonModule,
      ],
    }),
  ],
};

const Template: Story<SelectComponent> = (args: any) => ({
  component: SelectComponent,
  props: args,
  template: `<app-select [loading]="loading" [options]="options"></app-select>`,
});

export const Default = Template.bind({});
Default.args = { options: [] };

export const Loading = Template.bind({});
Loading.args = { loading: true };

export const WithValues = Template.bind({});
WithValues.args = {
  options: [
    { label: 'Guusto Card', value: '' },
    { label: 'Coffee', value: 'COFFEE' },
    { label: 'Drink', value: 'DRINK' },
  ],
};

// Other stories could be added here as well, all you have to do is export them along!
