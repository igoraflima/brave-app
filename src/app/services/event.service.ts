import { Injectable } from '@angular/core';
import { BaseService } from './base/base.service';
import { Observable } from 'rxjs';
import { EventDateDTO } from '../core/dtos/EventDateDTO';

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {

  private readonly EVENT_PATH: string = '/event';

  public findById(eventId: number) {
    return this.find(`${this.EVENT_PATH}/${eventId}`);
  }

  public findByRange(start: number, end: number): Observable<Array<EventDateDTO>> {
    return this.find(`${this.EVENT_PATH}/find-all-by-range`, { start: start, end: end });
  }
}
