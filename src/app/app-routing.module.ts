import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {IndexPageComponent} from './routes/index-page/index-page.component';
import {ArticlePageComponent} from './routes/article-page/article-page.component';

const routes: Route[] = [
    {path: '', component: IndexPageComponent},
    {path: 'article/:article_id', component: ArticlePageComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
