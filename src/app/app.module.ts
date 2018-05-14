import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './routes/index-page/index-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlePageComponent } from './routes/article-page/article-page.component';
import { NgoApiService } from './services/api/ngo/ngo.api.service';
import { ArticleApiService } from './services/api/article/article.api.service';
import { HttpClientModule } from '@angular/common/http';
import { EventApiService } from './services/api/event/event.api.service';
import { EventPageComponent } from './routes/event-page/event-page.component';
import { NgoPageComponent } from './routes/ngo-page/ngo-page.component';
import { UnderConstructionPageComponent } from './routes/under-construction-page/under-construction-page.component';
import { ArticleViewComponent } from './views/article-view/article-view.component';
import { NgoViewComponent } from './views/ngo-view/ngo-view.component';
import { EventViewComponent } from './views/event-view/event-view.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ArticlePageComponent,
    EventPageComponent,
    NgoPageComponent,
    UnderConstructionPageComponent,
    ArticleViewComponent,
    NgoViewComponent,
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    NgoApiService,
    ArticleApiService,
    EventApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
