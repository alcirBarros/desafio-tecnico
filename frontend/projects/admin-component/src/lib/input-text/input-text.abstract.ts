import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FormService } from '../form/form.service';
import { uuid } from '../util/uuid.generator';

@Component({ template: '' })
export abstract class AbstractInputComponent<T = any> implements ControlValueAccessor {

    @Input()
    id: string = uuid();

    @Input()
    readonly: boolean = false;

    @Input()
    required: boolean = false;

    @Input()
    placeholder: string = '';

    @Input()
    type: string = 'text';

    @Input()
    disabled: boolean;

    @Output()
    onBlur = new EventEmitter<void>();

    @Output()
    onFocus = new EventEmitter<void>();

    protected _value: any;

    constructor(protected formService: FormService) {
    }

    onChange: (value: any) => {};
    onTouched: () => {};

    notifyValueChange(): void {
        if (this.onChange) {
            this.onChange(this.value);
        }
    }

    writeValue(value: T): void {
        this._value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    set value(value: T) {
        this._value = value;
        this.notifyValueChange();
    }

    get value(): T {
        return this._value;
    }

    get inputReadonly(): boolean {
        return this.readonly;
    }

    get inputRequired(): boolean {
        return this.required;
    }
}