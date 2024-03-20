import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { SharedModule } from 'src/app/shared/shared.module';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule,
    SharedModule
  ],
  declarations: [StorePage],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ]
})
export class StorePageModule {}
