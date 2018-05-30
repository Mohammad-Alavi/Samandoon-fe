import { Component, Input } from '@angular/core';
import { Ngo } from '../../objects/ngo';
import { Event } from '../../objects/event';
import { EventApiService } from '../../services/api/event/event.api.service';
import { List } from '../List';

@Component({
  selector: 'app-event-list-view',
  templateUrl: './event-list-view.component.html',
  styleUrls: ['./event-list-view.component.scss']
})
export class EventListViewComponent extends List<Event> {
  private _ngo: Ngo;

  @Input()
  set ngo(ngo: Ngo) {
    this._ngo = ngo;
    this.loadMore();
  }

  get ngo() {
    return this._ngo;
  }

  constructor(private eventApiService: EventApiService) {
    super();
  }

  public loadMore() {
    this.isLoading = true;
    this.eventApiService.getEventList(this.ngo.id, this.page, this);
  }

}
