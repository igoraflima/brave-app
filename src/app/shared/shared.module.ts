import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from '../app-routing.module';

const components = [TabsComponent]


@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
