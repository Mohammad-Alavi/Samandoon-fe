import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
  }

  getArticle() {
    const id = this.route.snapshot.paramMap.get('article_id');
  }

}
