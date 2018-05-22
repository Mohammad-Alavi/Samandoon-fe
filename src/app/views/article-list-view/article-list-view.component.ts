import { Component, Input, OnInit } from '@angular/core';
import { Ngo } from '../../objects/ngo';
import { Article } from '../../objects/article';
import { ArticleApiService } from '../../services/api/article/article.api.service';

@Component({
  selector: 'app-article-list-view',
  templateUrl: './article-list-view.component.html',
  styleUrls: ['./article-list-view.component.scss']
})
export class ArticleListViewComponent implements OnInit, ApiCallGetAll<Article> {
  private _ngo_id: string;

  @Input()
    set ngo_id(ngo_id: string) {
    this._ngo_id = ngo_id;
    this.getArticleList(1);
  }
  get ngo_id() {
    return this._ngo_id;
  }
  articleList: Article[] = Array();

  constructor(private articleApiService: ArticleApiService) {
  }

  ngOnInit() {
  }

  getArticleList(page: number) {
    this.articleApiService.getArticleList(this._ngo_id, page, this);
  }

  onApiCallSuccess(objList: Article[], currentPage: number, totalPage: number) {
    objList.forEach((article) => {
      this.articleList.push(article);
    });
  }

  onApiCallFailure() {
  }

}
