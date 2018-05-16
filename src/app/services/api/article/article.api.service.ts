import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleApiInterface } from './article.api.interface';
import { ApiConfig } from '../api.config';
import { Article } from '../../../objects/article';

@Injectable()
export class ArticleApiService {
  constructor(private http: HttpClient) {
  }

  getArticle(article_id: string, articleApiInterface: ArticleApiInterface) {
    const response = this.http.get(ApiConfig.API_URL + '/ngo/article/' + article_id + '?include=ngo');
    response.subscribe(object => {
      const article: Article = object['data']['object'];
      article.ngo = object['data']['ngo']['data']['object'];
      articleApiInterface.onArticleLoaded(article);
    });
  }

}
