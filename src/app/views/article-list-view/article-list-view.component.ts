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
  private _ngo: Ngo;

  @Input()
    set ngo(ngo: Ngo) {
    this._ngo = ngo;
    this.getArticleList(1);
  }
  get ngo() {
    return this._ngo;
  }
  articleList: Article[] = Array();

  constructor(private articleApiService: ArticleApiService) {
  }

  ngOnInit() {
  }

  getArticleList(page: number) {
    this.articleApiService.getArticleList(this.ngo.id, page, this);
  }

  onApiCallSuccess(objList: Article[], currentPage: number, totalPage: number) {
    objList.forEach((article) => {
      this.articleList.push(article);
    });
  }

  onApiCallFailure() {
  }

}
