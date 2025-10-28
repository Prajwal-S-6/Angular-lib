import {Component, input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'kp-input',
  imports: [],
  templateUrl: './kp-input.html',
  styleUrl: './kp-input.css',
  providers: [
    {provide: NG_VALUE_ACCESSOR,
    useExisting: KpInput,
    multi: true}
  ]
})
export class KpInput implements ControlValueAccessor {
    label = input.required<string>();
    type = input('text');
    disabled = false;
    value = '';

  onChange = (_: any) => {};
  onTouched = () => {};

    writeValue(obj: any): void {
        this.value = obj || '';
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

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.value = target.value;
    this.onChange(this.value);
  }

}
