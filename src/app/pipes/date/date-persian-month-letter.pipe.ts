import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
import { Date } from '../../objects/date';
/*
 * Converts the date object to first 3 letters of persian month name
 * Usage:
 *   value | datePersianMonthLetter
 * Example:
 *   {{ article.created_at | datePersianMonthLetter }}
 *   formats to: ارد
*/
@Pipe({
  name: 'datePersianMonthLetter'
})
export class DatePersianMonthLetterPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('MMM');
  }

}
