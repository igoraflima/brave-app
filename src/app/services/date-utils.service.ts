import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor() { }

  public static getMillis(date: string | Date): number {
    return new Date(date).getTime();
  }
}
