import { Pipe, PipeTransform } from '@angular/core';
import { Date } from '../../objects/date';
import * as moment from 'jalali-moment';

/*
 * Converts the date object to persian format
 * Usage:
 *   value | datePersian
 * Example:
 *   {{ article.created_at | datePersian }}
 *   formats to: 1397/2/16 11:03:18
 */

@Pipe({
  name: 'datePersian'
})
export class DatePersianPipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    const jalali = moment(value.date, 'YYYY-M-D HH:mm:ss.000000');
    return convertDigitIn(
      jalali.locale('fa')
        .format('YYYY/M/D')
    );
  }
}

function convertDigitIn(enDigit) { // PERSIAN, ARABIC, URDO
  let newValue = '';
  for (let i = 0; i < enDigit.length; i++) {
    const ch = enDigit.charCodeAt(i);
    if (ch >= 48 && ch <= 57) {
      // european digit range
      const newChar = ch + 1584;
      newValue = newValue + String.fromCharCode(newChar);
    } else {
      newValue = newValue + String.fromCharCode(ch);
    }
  }
  return newValue;
}
