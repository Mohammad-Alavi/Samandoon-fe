import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../objects/article';
import { ArticleApiService } from '../../services/api/article/article.api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit, ApiCallGet<Article> {

  article: Article;

  constructor(private route: ActivatedRoute,
              private articleApiService: ArticleApiService) {
  }

  ngOnInit() {
    this.getArticle();
  }

  getArticle() {
    const id = this.route.snapshot.paramMap.get('article_id');
    this.articleApiService.getArticle(id, this);
  }

  onApiCallSuccess(obj: Article) {
    this.article = obj;
  }

  onApiCallFailure() {
  }

}
