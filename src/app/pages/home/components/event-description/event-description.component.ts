import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent {

  @Input() closeModal: Function = () => {};

  public title: string = 'Evento Brave';

  constructor() {}

}
