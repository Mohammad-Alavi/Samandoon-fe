import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgoApiInterface } from './ngo.api.interface';
import { ApiConfig } from '../api.config';

@Injectable()
export class NgoApiService {
  constructor(private http: HttpClient) {
  }

  getNgo(ngo_id: string, ngoApiInterface: NgoApiInterface) {
    const response = this.http.get(ApiConfig.API_URL + '/ngo/' + ngo_id);
    response.subscribe(object =>
      ngoApiInterface.onNgoLoaded(object['data']['object'])
    );
  }

}
