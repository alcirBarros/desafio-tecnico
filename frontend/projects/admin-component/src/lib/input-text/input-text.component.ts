import { NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, EventEmitter, OnInit, Input, Output, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { AbstractInputComponent } from './input-text.abstract';

export const CUSTOM_VALUE_ACCESSOR: any = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputText),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => InputText),
    multi: true
  }
];

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
  providers: CUSTOM_VALUE_ACCESSOR
})
export class InputText extends AbstractInputComponent implements OnInit, ControlValueAccessor, Validator {

  @Input()
  disabled: boolean;

  @Input()
  label: string;

  @Input()
  requiredMessage: string = "Field is required";

  @Input()
  placeholder: string = '';

  @Input()
  ngClass: null;

  @Input()
  formControlName: any;

  @Input()
  minlengthMessage: string = "This must be at least {0} / {1} characters";

  @Input()
  maxlength: string;

  @Output()
  onBlur = new EventEmitter<void>();

  @Output()
  onFocus = new EventEmitter<void>();

  formControl: FormControl;

  ngOnInit() {

  }



  getMinlengthMessage(): string {
    const length = this.formControl.value.length
    const minlength = this.formControl?.errors?.minlength.requiredLength;
    return this.formatString(this.minlengthMessage, length, minlength);
  }

  formatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
      str = str.replace(`{${index}}`, val[index]);
    }
    return str;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log(isDisabled);
  }

  validate(control: FormControl): ValidationErrors {
    this.formControl = control;
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {

  }

  get submitted() {
    return this.formService.form.submitted;
  }

  get message() {
    return this.formService.form.message;
  }
}



// account_validation_messages = {
//   'username': [
//     { type: 'required', message: 'Username is required' },
//     { type: 'minlength', message: 'Username must be at least 5 characters long' },
//     { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
//     { type: 'pattern', message: 'Your username must contain only numbers and letters' },
//     { type: 'validUsername', message: 'Your username has already been taken' }
//   ],
//   'email': [
//     { type: 'required', message: 'Email is required' },
//     { type: 'pattern', message: 'Enter a valid email' }
//   ],
//   'confirm_password': [
//     { type: 'required', message: 'Confirm password is required' },
//     { type: 'areEqual', message: 'Password mismatch' }
//   ],
//   'password': [
//     { type: 'required', message: 'Password is required' },
//     { type: 'minlength', message: 'Password must be at least 5 characters long' },
//     { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
//   ],
//   'terms': [
//     { type: 'pattern', message: 'You must accept terms and conditions' }
//   ]
// };



