import { Component, OnInit } from '@angular/core';
import { List } from '../List';
import { Ngo } from '../../objects/ngo';
import { NgoApiService } from '../../services/api/ngo/ngo.api.service';

@Component({
  selector: 'app-ngo-list-view',
  templateUrl: './ngo-list-view.component.html',
  styleUrls: ['./ngo-list-view.component.scss']
})
export class NgoListViewComponent extends List<Ngo> implements OnInit {

  constructor(public ngoApiService: NgoApiService) {
    super();
  }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;
    this.ngoApiService.getNgoList(this.page, this);
  }

}
