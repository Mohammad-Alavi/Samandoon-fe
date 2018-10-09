import { Component, Input } from '@angular/core';
import { Pageable } from '../Pageable';

@Component({
  selector: 'app-pagination-load-more',
  templateUrl: './pagination-load-more.component.html',
  styleUrls: ['./pagination-load-more.component.scss']
})
export class PaginationLoadMoreComponent {

  @Input() public isEnded = false;
  @Input() public isLoading = false;
  @Input() public pageable: Pageable;

  constructor() {
  }

  loadMore() {
    if (!this.isEnded && !this.isLoading) {
      this.pageable.loadMore();
    }
  }

}
