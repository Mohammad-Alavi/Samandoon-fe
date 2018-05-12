import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './routes/index-page/index-page.component';
import {AppRoutingModule} from './app-routing.module';
import { ArticlePageComponent } from './routes/article-page/article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    ArticlePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
