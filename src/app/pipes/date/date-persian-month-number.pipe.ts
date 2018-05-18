import { Pipe, PipeTransform } from '@angular/core';
import { Date } from '../../objects/date';
import * as moment from 'jalali-moment';
/*
 * Converts the date object to persian month
 * Usage:
 *   value | datePersianMonthNumber
 * Example:
 *   {{ article.created_at | datePersianMonthNumber }}
 *   formats to: 02
*/
@Pipe({
  name: 'datePersianMonthNumber'
})
export class DatePersianMonthNumberPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('MM');
  }

}
