import { NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { uuid } from '../util/uuid.generator';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  @Input()
  formGroup: FormGroup;

  constructor(
    protected formService: FormService
  ) { }

  ngOnInit() {
    this.formService.form.submitted = false;
    this.formService.form.message = false;
  }

  childFormSubmit() {
    this.formService.form.submitted = true;
    this.formService.form.message = true;

    setTimeout(() => {
      this.formService.form.submitted = false;
    }, 1000);

    Object.keys(this.formGroup.controls).forEach((key: string) => {
      let formControl = this.formGroup.get(key);
      if (formControl.status === "INVALID") {
      //  console.log(formControl);
      }
    });
  }
}