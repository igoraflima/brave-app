import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EventDTO } from 'src/app/core/dtos/EventDTO';
import { EventDateDTO } from 'src/app/core/dtos/EventDateDTO';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss'],
})
export class EventDescriptionComponent implements OnInit {

  @Input() closeModal: Function = () => {};
  @Input() eventId?: number;

  public entity: EventDTO = new EventDTO();
  public loading: boolean = false;

  constructor(
    private service: EventService 
  ) {}

  ngOnInit(): void {
     this.populate(this.eventId);
  }

  populate(eventId?: number) {
    if (!eventId) return;

    this.loading = true;
    this.service.findById(eventId).subscribe({
      next: (response: EventDTO) => {
        if (!response) {
          this.loading = false;
          return;
        }

        this.entity = response;
        this.loading = false;
      }, error: () => {
        this.loading = false;
      }
    })
  }

}
