import { Component, OnInit } from '@angular/core';
import { Event } from '../../objects/event';
import { ActivatedRoute } from '@angular/router';
import { EventApiService } from '../../services/api/event/event.api.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit, ApiCallGet<Event> {

  event: Event;

  constructor(private route: ActivatedRoute,
              private eventApiService: EventApiService) {
  }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    const id = this.route.snapshot.paramMap.get('event_id');
    this.eventApiService.getEvent(id, this);
  }

  onApiCallSuccess(obj: Event) {
    this.event = obj;
  }

  onApiCallFailure() {
  }


}
