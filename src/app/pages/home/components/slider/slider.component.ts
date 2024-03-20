import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { EffectCards, Swiper } from 'swiper';

SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent  implements OnInit {

  public cardsContent: Array<any> = [];

  constructor() { }

  ngOnInit() { this.buildCardsContent(); }

  buildCardsContent(): void {
    this.cardsContent = [
      {
        label: 'Versículo',
        color: 'background-color: rgb(206, 17, 17)'
      },
      {
        label: 'Leitura',
        color: 'rgb(0, 140, 255)'
      },
      {
        label: 'Oração',
        color: 'rgb(10, 184, 111)'
      }
    ]
  }

}
