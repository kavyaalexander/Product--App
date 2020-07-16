import { Component, OnInit } from '@angular/core';
// import{ProductModel} from './product.model';
import {ProductService} from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateanddelete',
  templateUrl: './updateanddelete.component.html',
  styleUrls: ['./updateanddelete.component.css']
})
export class UpdateanddeleteComponent implements OnInit {
  title:String="Choose Action";
  products= <any>[];
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  constructor(private productService:ProductService,private router:Router) { }
  toogleImage():void{
    this.showImage=!this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts()
     .subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data))
      console.log(this.products);
    });
  }
deleteProduct(id)
{
  console.log("delete"+id);
  this.productService.deleteProduct(id);
  console.log("Deleted");
  alert("Sucessfully Deleted");
  this.router.navigate(['/']);
}
editProduct(id){
  
  this.productService.updateProduct(id);
}
}
