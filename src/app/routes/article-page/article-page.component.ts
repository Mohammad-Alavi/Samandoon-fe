import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleApiService } from '../../services/api/article/article.api.service';
import { ArticleApiInterface } from '../../services/api/article/article.api.interface';
import { Article } from '../../objects/article';

@Component({
  selector: 'app-article',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit, ArticleApiInterface {

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

  //  This method is called whenever we call getArticle() and the response arrives
  onArticleLoaded(article: Article) {
    this.article = article;
  }

}
