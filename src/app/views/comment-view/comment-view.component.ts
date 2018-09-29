import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../objects/comment';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent implements OnInit {

  @Input() comment: Comment;

  constructor() {
  }

  ngOnInit() {
  }

}
