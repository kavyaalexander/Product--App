import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { LoginModel } from '../login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String="Login";
  constructor(private productService:ProductService,private router: Router) { }
  loginDatas=new LoginModel(null,null);


  ngOnInit(): void {
  }
  Login(){
    this.productService.newLogin(this.loginDatas)
    .subscribe(
      (res:any)=>{            
     if(res.token)
{
  console.log(res)
   localStorage.setItem('token',res.token);
          this.router.navigate(['/updatedelete']);
          // console.log(status="false")
          alert("Successfully Login");
          
}
else
{
   alert("Invalid Credentials!")
  console.log(res)
}
 })
  
}
  }



