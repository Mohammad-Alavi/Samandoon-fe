import { Component, Input, OnInit } from '@angular/core';
import { Ngo } from '../../objects/ngo';
import { Event } from '../../objects/event';
import { EventApiService } from '../../services/api/event/event.api.service';

@Component({
  selector: 'app-event-list-view',
  templateUrl: './event-list-view.component.html',
  styleUrls: ['./event-list-view.component.scss']
})
export class EventListViewComponent implements OnInit, ApiCallGetAll<Event> {
  private _ngo: Ngo;

  @Input()
  set ngo(ngo: Ngo) {
    this._ngo = ngo;
    this.getEventList(1);
  }
  get ngo() {
    return this._ngo;
  }
  eventList: Event[] = Array();
  constructor(private eventApiService: EventApiService) { }

  ngOnInit() {
  }

  getEventList(page: number) {
    this.eventApiService.getEventList(this.ngo.id, page, this);
  }

  onApiCallSuccess(objList: Event[], currentPage: number, totalPage: number) {
    objList.forEach((event) => {
      this.eventList.push(event);
    });
  }

  onApiCallFailure() {
  }

}
