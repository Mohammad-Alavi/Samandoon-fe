import { Component, Input, OnInit } from '@angular/core';
import { Ngo } from '../../objects/ngo';
import { Article } from '../../objects/article';
import { ArticleApiService } from '../../services/api/article/article.api.service';
import { Pageable } from '../Pageable';

@Component({
  selector: 'app-article-list-view',
  templateUrl: './article-list-view.component.html',
  styleUrls: ['./article-list-view.component.scss']
})
export class ArticleListViewComponent implements OnInit, ApiCallGetAll<Article>, Pageable {
  private _ngo: Ngo;
  public page = 1;
  public isEnded = false;
  public isLoading = false;

  @Input()
  set ngo(ngo: Ngo) {
    this._ngo = ngo;
    this.loadMore();
  }

  get ngo() {
    return this._ngo;
  }

  articleList: Article[] = Array();

  constructor(private articleApiService: ArticleApiService) {
  }

  ngOnInit() {
  }

  public loadMore() {
    this.isLoading = true;
    this.articleApiService.getArticleList(this.ngo.id, this.page, this);
  }

  onApiCallSuccess(objList: Article[], currentPage: number, totalPage: number) {
    objList.forEach((article) => this.articleList.push(article));
    this.page++;
    this.isEnded = currentPage >= totalPage;
    this.isLoading = false;
  }

  onApiCallFailure() {
    this.isLoading = false;
  }

}
