import { Component, OnInit } from '@angular/core';
import { Ngo } from '../../objects/ngo';
import { ActivatedRoute, Router } from '@angular/router';
import { NgoApiService } from '../../services/api/ngo/ngo.api.service';

// import {Direction, Directionality} from '@angular/cdk/bidi';

@Component({
  selector: 'app-ngo-page',
  templateUrl: './ngo-page.component.html',
  styleUrls: ['./ngo-page.component.scss']
})
export class NgoPageComponent implements OnInit, ApiCallGet<Ngo> {
  ngo: Ngo;

  ngOnInit(): void {
    this.getNgo();
  }

  // private dir: Direction;

  constructor(private route: ActivatedRoute,
              private ngoApiService: NgoApiService,
              // private router: Router
  ) {
  }

  getNgo() {
    const ngo_public_name = this.route.snapshot.paramMap.get('ngo_public_name');
    this.ngoApiService.getNgo(ngo_public_name, this);
  }

  onApiCallSuccess(obj: Ngo) {
    this.ngo = obj;
  }

  onApiCallFailure() {
  }

  // @HostListener('moreClicked')
  // moreClicked() {
  //   this.router.navigateByUrl('/article');
  // }
}
