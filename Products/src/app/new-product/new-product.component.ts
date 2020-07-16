import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
title:String="Add Product";
  constructor(private productService:ProductService,private router: Router) { }
  productItem=new ProductModel(null,null,null,null,null,null,null,null);

  ngOnInit(): void {
   
  }
AddProduct(){
  console.log(this.productItem)
  this.productService.newProduct(this.productItem)
  .subscribe(
    err => {
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.router.navigate(['/login'])
        }
      }
    })
    alert("Success");
    this.router.navigate(['/']);
  // console.log("Called"); 
  // alert("Success");
  // this.router.navigate(['/']);
}
}
