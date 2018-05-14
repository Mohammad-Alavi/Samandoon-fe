import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../objects/article';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  @Input() article: Article;

  constructor() {
  }

  ngOnInit() {
  }

}
