import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {
  constructor() { }

  attemptNumber: number = 0;
  increaseAttemptsNumber ():void {
    this.attemptNumber++;
  }
  getAttemptNumber ():number { 
    return this.attemptNumber; 
  } 
}
