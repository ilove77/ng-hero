import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  // <!-- 地一部分 範本-->
  submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  };
  test = '';
  model = {name:''}
  // <!-- 地二部分 響應示-->
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   }),
  // });
   // 使用formbuider重購
   constructor(private fb: FormBuilder) { }
   profileForm = this.fb.group({
    //  引入validators 使用 required
     firstName: ['',Validators.required,Validators.email],
     lastName: ['',Validators.minLength(6)],
     address: this.fb.group({
       street: [''],
       city: [''],
       state: [''],
       zip: ['']
     }),
   });
   get f() {
    return this.profileForm.controls
  }
  //  get aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }
  //  addAlias() {

  //   this.aliases.push(this.fb.control(''));
  // }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
    // 像這樣，使用 setValue() 方法會整體性替換控制元件的值，但在這裡我故意少寫 zip 屬性，並嘗試提交。
    // this.profileForm.setValue({
    //   firstName: 'Nancy',
    //   lastName: '',
    //   address: {
    //     street: '123 Drew Street',
    //     city: '',
    //     state: '',
    //   }
    // });

   
  }
  onsubmit() {
    console.log(this.profileForm.value);
  }
  }
