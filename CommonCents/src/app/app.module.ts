import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';

// Ant Design Components
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

// Application Components
import { SelectComponent } from 'components/select/select.component';
import { InputComponent } from 'components/input/input.component';
import { MerchantComponent } from 'components/merchant/merchant.component';
import { MerchantSelectComponent } from 'components/merchant-select/merchant-select.component';

// Pipes
import { CallbackPipe } from 'pipes/callback.pipe';
import { HomeComponent } from './pages/home/home.component';

registerLocaleData(en);
@NgModule({
  declarations: [
    CallbackPipe,
    AppComponent,
    SelectComponent,
    InputComponent,
    MerchantComponent,
    MerchantSelectComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
