import { Injectable } from '@angular/core';
import { ApiConfig } from '../api.config';
import { HttpService } from '../http.service';
import { Ngo } from '../../../objects/ngo';

@Injectable()
export class NgoApiService extends HttpService {

  private getNgoUrl: string = ApiConfig.API_URL + '/ngo/';

  getNgo(ngo_id: string, callBack: ApiCallGet<Ngo>) {
    const response = this.http.get(this.getNgoUrl + ngo_id);
    response.subscribe(object =>
      callBack.onApiCallSuccess(object['data']['object'])
    );
  }

}
