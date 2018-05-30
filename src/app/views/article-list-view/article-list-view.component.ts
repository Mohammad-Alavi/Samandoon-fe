import { Component, Input } from '@angular/core';
import { Ngo } from '../../objects/ngo';
import { Article } from '../../objects/article';
import { ArticleApiService } from '../../services/api/article/article.api.service';
import { List } from '../List';

@Component({
  selector: 'app-article-list-view',
  templateUrl: './article-list-view.component.html',
  styleUrls: ['./article-list-view.component.scss']
})
export class ArticleListViewComponent extends List<Article> {
  private _ngo: Ngo;

  @Input()
  set ngo(ngo: Ngo) {
    this._ngo = ngo;
    this.loadMore();
  }

  get ngo() {
    return this._ngo;
  }

  constructor(private articleApiService: ArticleApiService) {
    super();
  }

  public loadMore() {
    this.isLoading = true;
    this.articleApiService.getArticleList(this.ngo.id, this.page, this);
  }

}
