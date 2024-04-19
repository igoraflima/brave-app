import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  public static getFirstDayOfCurrentMonth(): Date {
    let date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
  
  public static getLastDayOfCurrentMonth(): Date {
    let date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  public static getMillis(date: string | Date): number {
    return new Date(date).getTime();
  }
}
