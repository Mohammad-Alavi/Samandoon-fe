import { Injectable } from '@angular/core';
import { ApiConfig } from '../api.config';
import { HttpService } from '../http.service';
import { Ngo } from '../../../objects/ngo';

@Injectable()
export class NgoApiService extends HttpService {

  private getNgoUrl: string = ApiConfig.API_URL + '/ngo';

  getNgo(ngo_id: string, callBack: ApiCallGet<Ngo>) {
    const response = this.http.get(this.getNgoUrl + '/' + ngo_id);
    response.subscribe(object => {
      callBack.onApiCallSuccess(object['data']['object']);
    }, error => {
      callBack.onApiCallFailure();
    });
  }

  getNgoList(page: number, callBack: ApiCallGetAll<Ngo>) {
    const response = this.http.get(this.getNgoUrl +
      '?' +
      'page=' + page +
      '&' +
      'orderBy=created_at' +
      '&' +
      'sortedBy=desc'
    );
    response.subscribe(object => {

      const ngoList: Array<Ngo> = Array();
      for (const obj of object['data']) {
        ngoList.push(obj['object']);
      }

      callBack.onApiCallSuccess(ngoList,
        object['meta']['pagination']['current_page'],
        object['meta']['pagination']['total_pages']);
    }, error => {
      callBack.onApiCallFailure();
    });

  }
}
