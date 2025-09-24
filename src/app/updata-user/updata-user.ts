import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServices } from '../crud.services';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updata-user',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './updata-user.html',
  styleUrl: './updata-user.css',
})
export class UpdataUser implements OnInit {
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
      this.updateUserForm.setValue({
        id: this.userData.id,
        name: this.userData.name,
        username: this.userData.username,
        email: this.userData.email,
      });
    });
  }

  onsubmit() {
    this.crudservice.putDatabyId(this.userId.uid, this.updateUserForm.value).subscribe((data) => {
      this.router.navigateByUrl('crud');

      alert('Updated Successfully');
    });
  }
  cancel() {
    this.router.navigateByUrl('crud');
  }
}
