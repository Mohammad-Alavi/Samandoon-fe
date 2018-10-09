import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ApiConfig } from '../api.config';
import { Comment } from '../../../objects/comment';

@Injectable()
export class CommentApiService extends HttpService {

  private getCommentUrl: string = ApiConfig.API_URL + '/ngo/article';

  getCommentList(article_id: string, page: number, callBack: ApiCallGetAll<Comment>) {
    const response = this.http.get(this.getCommentUrl + '/' + article_id + '/comment' +
      '?' +
      'page=' + page +
      '&' +
      'orderBy=created_at' +
      '&' +
      'sortedBy=desc'
    );
    response.subscribe(object => {
      callBack.onApiCallSuccess(object['data'],
        object['meta']['pagination']['current_page'],
        object['meta']['pagination']['total_pages']);
    }, error => {
      callBack.onApiCallFailure();
    });
  }

}
