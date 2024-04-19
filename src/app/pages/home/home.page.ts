import { formatDate } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { EventDateDTO } from 'src/app/core/dtos/EventDateDTO';
import { DateUtilsService } from 'src/app/services/date-utils.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  public isModalOpen: boolean = false;
  private days: Array<any> = [];
  public eventId?: number;
  public loading: boolean = false;

  constructor(
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    this.loading = true;
      this.eventService.findByRange(
        DateUtilsService.getFirstDayOfCurrentMonth().getTime(), 
        DateUtilsService.getLastDayOfCurrentMonth().getTime())
        .subscribe({
          next: (response: Array<EventDateDTO>) => {
            if (!response) {
              this.days = [];
              this.loading = false;
              return;
            }

            this.days = response.map(e => this.buildEventDate(e));
            this.loading = false;
          }, error: () => {
            this.days = [];
            this.loading = false;
          }
      })
  }

  buildEventDate(e: EventDateDTO) {
    return {
      id: e.id,
      date: formatDate(e.date!, 'yyyy-MM-dd', 'pt-BR')
    }
  }

  public viewEvent(event: any): void {
    if (!event || !event.detail || !event.detail.value 
          || !event.detail.value.substring(0, 10)) {
            return;
    }

    let element = this.filterDaysBySpecificDate(event.detail.value.substring(0, 10));

    if (!element) return;
    
    this.eventId = element.id!;
    this.setModalOpen(true);
  }

  public closeModal = () => {
    this.setModalOpen(false);
  }

  public highlightedDates = (isoString: string) => {
    if (this.isDateEnabled(isoString)) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    return undefined;
  };

  public isDateEnabledToSelect = (isoString: string) => {
    return this.isDateEnabled(isoString);
  };

  public isDateEnabled(date: string): boolean {
    return !!this.filterDaysBySpecificDate(date);
  }

  private filterDaysBySpecificDate(date: string): EventDateDTO {
    return this.days.filter(e => e.date === date)[0];
  }

  private setModalOpen(value: boolean) {
    this.isModalOpen = value;
  }

}
