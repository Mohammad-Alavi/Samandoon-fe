import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
import { Date } from '../../objects/date';
/*
 * Converts the date object to persian month name
 * Usage:
 *   value | datePersianMonthName
 * Example:
 *   {{ article.created_at | datePersianMonthName }}
 *   formats to: اردیبهشت
*/
@Pipe({
  name: 'datePersianMonthName'
})
export class DatePersianMonthNamePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('MMMM');
  }

}
