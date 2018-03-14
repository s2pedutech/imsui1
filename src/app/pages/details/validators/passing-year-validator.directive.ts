import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[passingYear]',
  providers: [{provide: NG_VALIDATORS, useExisting: PassingYearValidatorDirective, multi: true}]
})
export class PassingYearValidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 13;
    const maxYear = currentYear ;
    const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
    const message = {
      'years': {
        'message': 'The passing year must be between ' + minYear + ' and ' + maxYear
      }
    };
    return isValid ? null : message;
  }
}
