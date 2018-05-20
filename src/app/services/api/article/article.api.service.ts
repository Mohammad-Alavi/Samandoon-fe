import { Injectable } from '@angular/core';
import { ApiConfig } from '../api.config';
import { HttpService } from '../http.service';
import { Article } from '../../../objects/article';

@Injectable()
export class ArticleApiService extends HttpService {

  private getArticleUrl: string = ApiConfig.API_URL + '/ngo/article/';

  getArticle(article_id: string, callBack: ApiCallGet<Article>) {
    const response = this.http.get(this.getArticleUrl + article_id + '?include=ngo');
    response.subscribe(object => {
      const article: Article = object['data']['object'];
      article.ngo = object['data']['ngo']['data']['object'];
      callBack.onApiCallSuccess(article);
    });
  }

}
