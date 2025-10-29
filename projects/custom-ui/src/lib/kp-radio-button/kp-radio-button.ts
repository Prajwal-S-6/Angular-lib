import {Component, input} from '@angular/core';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'kp-radio-button',
  imports: [
    MatRadioButton,
    MatRadioGroup
  ],
  templateUrl: './kp-radio-button.html',
  styleUrl: './kp-radio-button.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: KpRadioButton,
      multi: true
    }
  ]
})
export class KpRadioButton implements ControlValueAccessor{
  options = input.required<{label: string, value: string, checked: boolean}[]>();
  value= '';
  readonly = input(false);
  disabled = false;


  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectionchange(event: string) {
    this.value = event;
    this.onTouched();
    this.onChange(this.value);
  }

}
