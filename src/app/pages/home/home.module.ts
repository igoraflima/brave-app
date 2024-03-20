import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonDatetime, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';
import { EventDescriptionComponent } from './components/event-description/event-description.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [ SliderComponent, EventDescriptionComponent ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    SharedModule
  ],
  declarations: [HomePage, ...components]
})
export class HomePageModule {}
