import { formatDate } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DateUtilsService } from 'src/app/services/date-utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public isModalOpen: boolean = false;

  private days: Array<number> = [
    new Date('2024-01-26').getTime(), new Date('2024-01-25').getTime()
  ];

  constructor() {}

  public viewEvent(): void {
    this.setModalOpen(true);
  }

  public closeModal = () => {
    this.setModalOpen(false);
  }

  public highlightedDates = (isoString: string) => {
    if (this.isDateEnabled(DateUtilsService.getMillis(isoString))) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    return undefined;
  };

  public isDateEnabledToSelect = (isoString: string) => {
    return this.isDateEnabled(DateUtilsService.getMillis(isoString));
  };

  public isDateEnabled(date: number): boolean {
    return this.days.includes(date);
  }

  private setModalOpen(value: boolean) {
    this.isModalOpen = value;
  }
}
