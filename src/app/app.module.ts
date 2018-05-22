import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { DatePersianPipe } from './pipes/date/date-persian.pipe';
import 'hammerjs';
import 'hammer-timejs';
import { BasePageComponent } from './views/base-page/base-page.component';
import { DatePersianDayNamePipe } from './pipes/date/date-persian-day-name.pipe';
import { DatePersianDayNumberPipe } from './pipes/date/date-persian-day-number.pipe';
import { DatePersianDayLetterPipe } from './pipes/date/date-persian-day-letter.pipe';
import { DatePersianMonthNumberPipe } from './pipes/date/date-persian-month-number.pipe';
import { DatePersianMonthNamePipe } from './pipes/date/date-persian-month-name.pipe';
import { DatePersianMonthLetterPipe } from './pipes/date/date-persian-month-letter.pipe';
import { DatePersianYearPipe } from './pipes/date/date-persian-year.pipe';
import { TimePipe } from './pipes/time/time.pipe';
import { ArticleListViewComponent } from './views/article-list-view/article-list-view.component';

@NgModule({
  declarations: [
    //  region Components
    AppComponent,
    IndexPageComponent,
    ArticlePageComponent,
    EventPageComponent,
    NgoPageComponent,
    UnderConstructionPageComponent,
    ArticleViewComponent,
    NgoViewComponent,
    EventViewComponent,
    BasePageComponent,
    ArticleListViewComponent,

    //  endregion
    //  region Pipes
    DatePersianPipe,
    DatePersianDayNamePipe,
    DatePersianDayNumberPipe,
    DatePersianDayLetterPipe,
    DatePersianMonthNumberPipe,
    DatePersianMonthNamePipe,
    DatePersianMonthLetterPipe,
    DatePersianYearPipe,
    TimePipe,
    //  endregion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MaterialModule,
    BrowserAnimationsModule
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
