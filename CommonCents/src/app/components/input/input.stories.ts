import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

export default {
  title: 'Components/Input',
  component: InputComponent,
  props: {
    placeholder: '',
    value: '',
    loading: false,
  },
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        NzInputModule,
        NzIconModule,
        NzSkeletonModule,
      ],
    }),
  ],
};

const Template: Story<InputComponent> = (args: any) => ({
  component: InputComponent,
  props: args,
  template: `<app-input [loading]="loading" [placeholder]="placeholder" [value]="value"></app-input>`,
});

export const Default = Template.bind({});
Default.args = { placeholder: '', value: '' };

export const Loading = Template.bind({});
Loading.args = { loading: true };

export const WithPlaceholderText = Template.bind({});
WithPlaceholderText.args = { placeholder: 'input text here' };

export const WithValue = Template.bind({});
WithValue.args = { value: 'mastercard' };
