import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class HttpService {

  protected constructor(public http: HttpClient) {
  }
}
