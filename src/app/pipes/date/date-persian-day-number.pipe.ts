import { Pipe, PipeTransform } from '@angular/core';
import { Date } from '../../objects/date';
import * as moment from 'jalali-moment';
/*
 * Converts the date object to persian day of the month
 * Usage:
 *   value | datePersianDayNumber
 * Example:
 *   {{ article.created_at | datePersianDayNumber }}
 *   formats to: 06
*/
@Pipe({
  name: 'datePersianDayNumber'
})
export class DatePersianDayNumberPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('DD');
  }

}
