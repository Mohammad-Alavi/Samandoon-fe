import { Injectable } from '@angular/core';
import { NgoApiInterface } from './ngo.api.interface';
import { ApiConfig } from '../api.config';
import { HttpService } from '../http.service';

@Injectable()
export class NgoApiService extends HttpService {

  getNgo(ngo_id: string, ngoApiInterface: NgoApiInterface) {
    const response = this.http.get(ApiConfig.API_URL + '/ngo/' + ngo_id);
    response.subscribe(object =>
      ngoApiInterface.onNgoLoaded(object['data']['object'])
    );
  }

}
