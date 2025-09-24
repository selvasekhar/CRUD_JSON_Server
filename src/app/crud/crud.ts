import { Component } from '@angular/core';
import { IUser } from '../iuser';
import { NgFor } from '@angular/common';
import { CrudServices } from '../crud.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [NgFor],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud {
  appdata: IUser[] = [];
data: any;
  constructor(private service: CrudServices, private router:Router) {
    this.getallDatas();
  }

  getallDatas() {
    this.service.getdatas().subscribe((data) => {
      this.appdata = data;
      // console.log(data);
    });
  }
  addnewUser(){
    this.router.navigateByUrl('add')
    // alert('add Delete Successfully')
  }

  updata(id:number){
    this.router.navigate(['updata', id])
    // alert('updata Delete Successfully')
  }
  onview(id:number){
    this.router.navigate(['view', id])
  }

  ondelete(id:number){
    this.service.deleteDatabyId(id).subscribe((data)=>{
      this.getallDatas()
      alert('Records Delete Successfully')
    })

  }
}
