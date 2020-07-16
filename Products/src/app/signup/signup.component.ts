import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { UserModel } from '../signup/user.model';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title:String="Sign Up";
  constructor(private productService:ProductService,private router: Router) { }
  userDatas=new UserModel(null,null,null,null);

  
  ngOnInit(): void {
  }
  Register(){
    
  this.productService.newUser(this.userDatas)
  .subscribe(
    (res:any)=>{    
      console.log(res)
      localStorage.setItem('token',res.token);
      this.router.navigate(['/login']);
    },
    err =>console.log(err)
  )
}
  
}

