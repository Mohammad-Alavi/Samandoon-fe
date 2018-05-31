import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../objects/article';
import { List } from '../List';
import { Comment } from '../../objects/comment';
import { CommentApiService } from '../../services/api/comment/comment.api.service';

@Component({
  selector: 'app-comment-list-view',
  templateUrl: './comment-list-view.component.html',
  styleUrls: ['./comment-list-view.component.scss']
})
export class CommentListViewComponent extends List<Comment> {

  private _article: Article;

  @Input()
  set article(article: Article) {
    this._article = article;
    this.loadMore();
  }

  get article() {
    return this._article;
  }

  constructor(public commentApiService: CommentApiService) {
    super();
  }

  loadMore() {
    this.isLoading = true;
    this.commentApiService.getCommentList(this.article.id, this.page, this);
  }

}
