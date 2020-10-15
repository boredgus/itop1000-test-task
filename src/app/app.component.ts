import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitService } from "./services/submit.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(fb: FormBuilder, private submitService:SubmitService) {
    this.form = fb.group({
      email: ['', [Validators.required, 
                  Validators.pattern("^[a-z0-9]+\.[-]{0,1}[a-z0-9]+@[a-z]{2,}\\.[a-z]{2,6}$")]],
      passwordCustomField: ['', [Validators.required, 
                                Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$")]]
    });
  }
  saveEmail(){
    let emailInput = this.form.controls['email'];
    if(emailInput.valid){
      let time = Date.now();
      localStorage[time] = emailInput.value;
    }
  }
  submit(){
    this.submitService.increaseAttemptsNumber();
    console.log(this.submitService.getAttemptNumber());
    if(this.submitService.getAttemptNumber() === 3){
      this.form.disable();
    }
  }
}
