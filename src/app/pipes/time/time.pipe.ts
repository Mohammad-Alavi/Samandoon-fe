import { Pipe, PipeTransform } from '@angular/core';
import { Date } from '../../objects/date';
import * as moment from 'jalali-moment';

/*
 * Converts the date object to time format
 * Usage:
 *   value | time
 * Example:
 *   {{ article.created_at | time }}
 *   formats to: 11:03
*/
@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return jalali.locale('fa').format('HH:mm');
  }

}
