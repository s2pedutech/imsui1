import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[telephoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: TelephoneNumberFormatValidatorDirective, multi: true}]
})
export class TelephoneNumberFormatValidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const isValidPhoneNumber = /^\d{2,2}-\d{10,10}$/.test(c.value);
    const message = {
      'telephoneNumber': {
        'message': 'must be valid (XX-XXXXXXXXXX format)'
      }
    };
    return isValidPhoneNumber ? null : message;
  }
}
