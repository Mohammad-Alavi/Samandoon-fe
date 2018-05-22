import { Injectable } from '@angular/core';
import { ApiConfig } from '../api.config';
import { HttpService } from '../http.service';
import { Article } from '../../../objects/article';

@Injectable()
export class ArticleApiService extends HttpService {

  private getArticleUrl:     string = ApiConfig.API_URL + '/ngo/article';

  getArticle(article_id: string, callBack: ApiCallGet<Article>) {
    const response = this.http.get(this.getArticleUrl + '/' + article_id + '?include=ngo');
    response.subscribe(object => {
      const article: Article = object['data']['object'];
      article.ngo = object['data']['ngo']['data']['object'];
      callBack.onApiCallSuccess(article);
    }, error => {
      callBack.onApiCallFailure();
    });
  }

  getArticleList(ngo_id: string, page: number, callBack: ApiCallGetAll<Article>) {
    const response = this.http.get(this.getArticleUrl +
      '?' +
      'ngo_id=' + ngo_id +
      '&' +
      'page=' + page +
      '&' +
      'include=ngo' +
      '&' +
      'orderBy=created_at' +
      '&' +
      'sortedBy=desc'
    );
    response.subscribe(object => {
      const articleList: Array<Article> = Array();
      for (const obj of object['data']) {
        const article: Article = obj['object'];
        article.ngo = obj['ngo']['data']['object'];
        articleList.push(article);
      }

      callBack.onApiCallSuccess(articleList,
        object['meta']['pagination']['current_page'],
        object['meta']['pagination']['total_pages']);
    }, error => {
      callBack.onApiCallFailure();
    });
  }

}
