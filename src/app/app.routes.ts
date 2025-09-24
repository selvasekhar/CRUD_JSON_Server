import { Routes } from '@angular/router';
import { Crud } from './crud/crud';
import { AddUser } from './add-user/add-user';
import { UpdataUser } from './updata-user/updata-user';
import { ViewUser } from './view-user/view-user';

export const routes: Routes = [

    {path:'crud', component:Crud},
    {path:'add', component:AddUser},
    {path:'updata/:id', component:UpdataUser},
    {path:'view/:id', component:ViewUser}


];
