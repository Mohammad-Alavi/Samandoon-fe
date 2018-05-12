import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EventApiInterface} from './event.api.interface';
import {ApiConfig} from '../api.config';

@Injectable()
export class EventApiService {
    constructor(private http: HttpClient) {
    }

    getEvent(event_id: string, eventApiInterface: EventApiInterface) {
        const response = this.http.get(ApiConfig.API_URL + '/ngo/event/' + event_id);
        response.subscribe(object =>
            eventApiInterface.onEventLoaded(object['data']['object'])
        );
    }

}
