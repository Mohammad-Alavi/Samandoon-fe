import { Pipe, PipeTransform } from '@angular/core';
import { Date } from '../../objects/date';
import * as moment from 'jalali-moment';

/*
 * Converts the date object to persian day of the week
 * Usage:
 *   value | datePersianDayName
 * Example:
 *   {{ article.created_at | datePersianDayName }}
 *   formats to: پنج‌شنبه
*/
@Pipe({
  name: 'datePersianDayName'
})
export class DatePersianDayNamePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('ddd');
  }

}
