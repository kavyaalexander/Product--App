import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private _deleteProductUrl="http://localhost:6200/deleteProduct";
private _updateProductUrl="http://localhost:6200/updateproduct";
  get: any;

  constructor(private http:HttpClient,private router: Router) { }
  getProducts(){
    return this.http.get("http://localhost:6200/products");
  }
  getProduct(id){
    return this.http.post("http://localhost:6200/product",{"id":id})
    
  }
  newProduct(item){
    console.log(item)
    return this.http.post("http://localhost:6200/insert",{"product":item})
  
  }
  deleteProduct(id){
    console.log(id);
    return this.http.post(this._deleteProductUrl,{"id":id}).subscribe((status)=>
    {console.log(status); 
  });
}
  updateProduct(item){
    console.log(item);
    return this.http.post(this._updateProductUrl,{"product":item}).subscribe((status)=>
    {console.log("Product Updated"); 
  });
  }

  newUser(user){
    return this.http.post("http://localhost:6200/signup",{"user":user})
  // .subscribe(data=>{console.log(data)})
  }
  
  newLogin(login){
    return this.http.post("http://localhost:6200/login",{"user":login})
  
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
