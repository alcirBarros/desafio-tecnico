import {Component, forwardRef, HostListener} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="decrement()"> - </button>
    {{value}}
    <button (click)="increment()"> + </button>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterComponent),
    multi: true
  }]
})
export class CounterComponent implements ControlValueAccessor {
  
  onChange: Function;

  onTouched: Function;
  
  private _value: number = 0;

  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
    if (this.onChange) {
      this.onChange(value);
    }
  }

  @HostListener('click') click() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }
  
  // вызовет форма если значение изменилось извне
  writeValue(obj: any): void {
    console.log(obj);
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    console.log(fn);
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    console.log(fn);
    this.onTouched = fn;
  }
}