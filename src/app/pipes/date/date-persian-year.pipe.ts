import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
import { Date } from '../../objects/date';
/*
 * Converts the date object to persian year
 * Usage:
 *   value | datePersianYear
 * Example:
 *   {{ article.created_at | datePersianYear }}
 *   formats to: 1397
*/
@Pipe({
  name: 'datePersianYear'
})
export class DatePersianYearPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('YYYY');
  }

}
