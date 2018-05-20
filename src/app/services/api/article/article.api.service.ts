import { Injectable } from '@angular/core';
import { ArticleApiInterface } from './article.api.interface';
import { ApiConfig } from '../api.config';
import { Article } from '../../../objects/article';
import { HttpService } from '../http.service';

@Injectable()
export class ArticleApiService extends HttpService {

  private getArticleUrl: string = ApiConfig.API_URL + '/ngo/article/';

  getArticle(article_id: string, articleApiInterface: ArticleApiInterface) {
    const response = this.http.get(this.getArticleUrl + article_id + '?include=ngo');
    response.subscribe(object => {
      const article: Article = object['data']['object'];
      article.ngo = object['data']['ngo']['data']['object'];
      articleApiInterface.onArticleLoaded(article);
    });
  }

}
