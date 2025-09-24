import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServices } from '../crud.services';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-user',
  imports: [],
  templateUrl: './view-user.html',
  styleUrl: './view-user.css',
})
export class ViewUser {
  userId!: {
    uid: number;
  };

  updateUserForm!: FormGroup;

  userData: any;

  constructor(
    private active: ActivatedRoute,
    private crudservice: CrudServices,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.userId = {
      uid: this.active.snapshot.params['id'],
    };
    console.log(this.userId.uid);

    this.crudservice.getDatabyId(this.userId.uid).subscribe((data) => {
      this.userData = data;
      // this.updateUserForm.setValue({
      //   id: this.userData.id,
      //   name: this.userData.name,
      //   username: this.userData.username,
      //   email: this.userData.email,
      // });
    });
  }

  onClose(){
    this.router.navigateByUrl('crud')
  }
}
