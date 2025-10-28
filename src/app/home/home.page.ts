import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {inject} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {



  private fb: FormBuilder = inject(FormBuilder)

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required], [Validators.email ]],
    password: ['', [Validators.required], [Validators.minLength(6)]],
  })
  
    onSubmit():void{
      if(this.form.invalid) return;
      console.log(this.form.value)
    }

  constructor() {}

}
