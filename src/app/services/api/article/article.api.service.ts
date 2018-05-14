import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleApiInterface } from './article.api.interface';
import { ApiConfig } from '../api.config';

@Injectable()
export class ArticleApiService {
  constructor(private http: HttpClient) {
  }

  getArticle(article_id: string, articleApiInterface: ArticleApiInterface) {
    const response = this.http.get(ApiConfig.API_URL + '/ngo/article/' + article_id);
    response.subscribe(object =>
      articleApiInterface.onArticleLoaded(object['data']['object'])
    );
  }

}
