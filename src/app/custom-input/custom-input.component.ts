import { Component, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
   }
  ngOnInit(): void {
  }

  writeValue(){

  }
  registerOnChange(){

  }
  registerOnTouched(){
    
  }
}
