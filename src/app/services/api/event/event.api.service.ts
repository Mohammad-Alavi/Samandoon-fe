import { Injectable } from '@angular/core';
import { ApiConfig } from '../api.config';
import { Event } from '../../../objects/event';
import { HttpService } from '../http.service';

@Injectable()
export class EventApiService extends HttpService {

  private getEventUrl: string = ApiConfig.API_URL + '/ngo/event';

  getEvent(event_id: string, callBack: ApiCallGet<Event>) {
    const response = this.http.get(this.getEventUrl + '/' + event_id + '?include=ngo');
    response.subscribe(object => {
      const event: Event = object['data']['object'];
      event.ngo = object['data']['ngo']['data']['object'];
      callBack.onApiCallSuccess(event);
    }, error => {
      callBack.onApiCallFailure();
    });
  }

  getEventList(ngo_id: string, page: number, callBack: ApiCallGetAll<Event>) {
    const response = this.http.get(this.getEventUrl +
      '?' +
      'ngo_id=' + ngo_id +
      '&' +
      'page=' + page +
      '&' +
      'include=ngo' +
      '&' +
      'orderBy=created_at' +
      '&' +
      'sortedBy=desc'
    );
    response.subscribe(object => {
      const eventList: Array<Event> = Array();
      for (const obj of object['data']) {
        const event: Event = obj['object'];
        event.ngo = obj['ngo']['data']['object'];
        eventList.push(event);
      }

      callBack.onApiCallSuccess(eventList,
        object['meta']['pagination']['current_page'],
        object['meta']['pagination']['total_pages']);
    }, error => {
      callBack.onApiCallFailure();
    });
  }

}
