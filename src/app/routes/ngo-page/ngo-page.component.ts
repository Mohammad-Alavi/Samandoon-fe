import {Component, OnInit} from '@angular/core';
import {NgoApiInterface} from '../../services/api/ngo/ngo.api.interface';
import {Ngo} from '../../objects/ngo';
import {ActivatedRoute} from '@angular/router';
import {NgoApiService} from '../../services/api/ngo/ngo.api.service';

@Component({
    selector: 'app-ngo-page',
    templateUrl: './ngo-page.component.html',
    styleUrls: ['./ngo-page.component.scss']
})
export class NgoPageComponent implements OnInit, NgoApiInterface {

    ngo: Ngo;

    constructor(private route: ActivatedRoute,
                private ngoApiService: NgoApiService) {
    }

    ngOnInit() {
        this.getNgo();
    }

    getNgo() {
        const id = this.route.snapshot.paramMap.get('ngo_id');
        this.ngoApiService.getNgo(id, this);
    }

    //  This method is called whenever we call getNgo() and the response arrives
    onNgoLoaded(ngo: Ngo) {
        this.ngo = ngo;
    }

}
