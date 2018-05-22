import { Component, OnInit } from '@angular/core';
import { Ngo } from '../../objects/ngo';
import { ActivatedRoute } from '@angular/router';
import { NgoApiService } from '../../services/api/ngo/ngo.api.service';

@Component({
  selector: 'app-ngo-page',
  templateUrl: './ngo-page.component.html',
  styleUrls: ['./ngo-page.component.scss']
})
export class NgoPageComponent implements OnInit, ApiCallGet<Ngo> {

  ngo_id;
  ngo: Ngo;

  constructor(private route: ActivatedRoute,
              private ngoApiService: NgoApiService) {
  }

  ngOnInit() {
    this.getNgo();
  }

  getNgo() {
    this.ngo_id = this.route.snapshot.paramMap.get('ngo_id');
    this.ngoApiService.getNgo(this.ngo_id, this);
  }

  onApiCallSuccess(obj: Ngo) {
    this.ngo = obj;
  }

  onApiCallFailure() {
  }

}
