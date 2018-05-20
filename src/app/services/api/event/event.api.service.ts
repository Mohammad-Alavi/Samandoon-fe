import { Injectable } from '@angular/core';
import { EventApiInterface } from './event.api.interface';
import { ApiConfig } from '../api.config';
import { Event } from '../../../objects/event';
import { HttpService } from '../http.service';

@Injectable()
export class EventApiService extends HttpService {

  getEvent(event_id: string, eventApiInterface: EventApiInterface) {
    const response = this.http.get(ApiConfig.API_URL + '/ngo/event/' + event_id + '?include=ngo');
    response.subscribe(object => {
      const event: Event = object['data']['object'];
      event.ngo = object['data']['ngo']['data']['object'];
      eventApiInterface.onEventLoaded(event);
    });
  }

}
