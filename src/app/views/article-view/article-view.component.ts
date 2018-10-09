import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../objects/article';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  @Input() article: Article;

  position = 150;
  textPrt1: string;
  textPrt2: string;

  constructor() {
  }

  ngOnInit() {
    // this.article.text = [this.article.text.slice(0, this.position), this.readMoreTemplate, this.article.text.slice(this.position)].join('');
    this.textPrt1 = this.article.text.slice(0, this.position);
    this.textPrt2 = this.article.text.slice(this.position);
  }
}
