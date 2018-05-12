import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './routes/index-page/index-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticlePageComponent } from './routes/article-page/article-page.component';
import { NgoApiService } from './services/api/ngo/ngo.api.service';
import { ArticleApiService } from './services/api/article/article.api.service';
import { HttpClientModule } from '@angular/common/http';
import { EventApiService } from './services/api/event/event.api.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      NgoApiService,
      ArticleApiService,
      EventApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
