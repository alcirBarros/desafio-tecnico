import { Component, OnInit, Input, forwardRef, Output } from '@angular/core';
import { ComboBoxOption } from './combobox.model';
import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { FormService } from '../form/form.service';

export const CUSTOM_VALUE_ACCESSOR: any = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ComboboxComponent),
    multi: true,
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ComboboxComponent),
    multi: true
  }
];
@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class ComboboxComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() 
  options: ComboBoxOption[];
  
  value: any;
  
  onChange: any;

  @Input() 
  showField = true;

  @Input()
  label: string;

  @Input()
  requiredMessage: string = "Field is required";

  showPeriodo = false;

  @Output() 
  change = new EventEmitter<any>();

  constructor(protected formService: FormService) { }

  formControl: FormControl;

  ngOnInit() {
  }
  setValue(value: any) {
    const result =  this.options.filter((x: ComboBoxOption) =>{
      return (x.value.toString() === value) ? x : null;
    });
    this.value = value;
    this.onChange(result[0]);
  }

  changeValue(value: any){    
    if( this.showField === true ){
      if( +value === 5 ){
        this.change.emit({show: true})
      }else{
        this.change.emit( {show: false} )  
      }
    }
    
    
  }

  writeValue(obj: any) {
    this.value =  (obj===null) ? obj: obj.value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDesabled: boolean): void {}

  validate(control: FormControl): ValidationErrors {
    this.formControl = control;
    return null;
  }

  get submitted() {
    return this.formService.form.submitted;
  }

  get message() {
    return this.formService.form.message;
  }

}