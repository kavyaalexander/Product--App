import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdateanddeleteComponent } from './updateanddelete/updateanddelete.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
{path:'',component:ProductListComponent},
{path:'add',component:NewProductComponent,
canActivate:[AuthGuard]
},
{path:'updateproduct/:id',component: EditproductComponent,canActivate:[AuthGuard]},
{path:'updatedelete',component:UpdateanddeleteComponent,canActivate:[AuthGuard]},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
