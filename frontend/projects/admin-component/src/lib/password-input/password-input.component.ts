import { FormService } from 'projects/angular-admin-lte/src/lib/admin-component/form/form.service';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { uuid } from '../util/uuid.generator';

@Component({
  selector: 'app-password-input',
  templateUrl : './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordinputComponent),
      multi: true,
    }
  ]
})
export class PasswordinputComponent implements ControlValueAccessor, OnInit{

  @Input()
  cid: string = uuid();

  @Input()
  type: string = 'text';

  @Input()
  disabled: boolean;

  @Input()
  label: string = '';

  @Input()
  readonly: boolean = false;

  @Input()
  required: boolean = false;

  @Input()
  placeholder: string = '';

  @Input()
  ngClass: null;

  @Input()
  formControl: FormControl;

  @Output()
  onBlur = new EventEmitter<void>();

  @Output()
  onFocus = new EventEmitter<void>();

  constructor(
    protected formService: FormService
  ) { }

  ngOnInit() {

  }


  get f() {
    let formGroup: any  = this;
    console.log(formGroup);
    return formGroup.__ngContext__[32].controls;
  }

  protected _value: string;
  onChange: any = () => {};
  onTouched: any = () => {};

 // @Input()
  set value(value: string) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  get value(): string {
    return this._value;
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log(isDisabled);
  //  throw new Error("Method not implemented.");
  }

  get inputReadonly(): boolean {
    return this.readonly || typeof this.readonly !== 'boolean';
  }

  get inputRequired(): boolean {
    return this.required || typeof this.required !== 'boolean';
  }

  get submitted() {
    return this.formService.form.submitted;
  }

  get message() {
    return this.formService.form.message;
  }
}