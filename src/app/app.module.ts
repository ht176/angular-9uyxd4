import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { DemoSearchBarBasicComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdMobileModule, BrowserAnimationsModule ],
  declarations: [ DemoSearchBarBasicComponent ],
  bootstrap:    [ DemoSearchBarBasicComponent ]
})
export class AppModule { }
        