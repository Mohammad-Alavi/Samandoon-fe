import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class HttpService {
  public constructor(public http: HttpClient) {
  }
}
