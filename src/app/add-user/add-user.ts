import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CrudServices } from '../crud.services';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {

  addUserForm! : FormGroup

  constructor(private router:Router, private fb:FormBuilder, private crudservice:CrudServices){

    this.addUserForm = this.fb.group({
      name:[''],
      username:[''],
      email:['']
      
    })

  }

  cancel(){
    this.router.navigateByUrl("/crud")
     }

  onsubmit(){
    console.log(this.addUserForm.value)
    this.crudservice.postData(this.addUserForm.value).subscribe((data)=>{
      this.router.navigateByUrl('/crud')
      
    })

    alert('add  Successfully')
  }

}
