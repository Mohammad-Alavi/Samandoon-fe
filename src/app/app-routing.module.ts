import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {IndexPageComponent} from './routes/index-page/index-page.component';
import {ArticlePageComponent} from './routes/article-page/article-page.component';
import {EventPageComponent} from './routes/event-page/event-page.component';
import {NgoPageComponent} from './routes/ngo-page/ngo-page.component';

const routes: Route[] = [
    {path: '', component: IndexPageComponent},
    {path: 'ngo/:ngo_id', component: NgoPageComponent},
    {path: 'article/:article_id', component: ArticlePageComponent},
    {path: 'event/:event_id', component: EventPageComponent}
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
