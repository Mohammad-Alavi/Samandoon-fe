import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
import { Date } from '../../objects/date';

/*
 * Converts the date object to first letter of persian day of the week
 * Usage:
 *   value | datePersianDayLetter
 * Example:
 *   {{ article.created_at | datePersianDayLetter }}
 *   formats to: پ
*/
@Pipe({
  name: 'datePersianDayLetter'
})
export class DatePersianDayLetterPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('dd');
  }

}
