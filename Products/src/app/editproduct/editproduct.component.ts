import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import {FormsModule} from '@angular/forms';
import{Router,ActivatedRoute} from '@angular/router';
import {from,Subscription} from 'rxjs';
import { ProductModel } from '../product-list/product.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit, OnDestroy{
   title="Product Details"
 productItem:ProductModel=new ProductModel(null,null,null,null,null,null,null,null);
 id;
 sub;
   constructor(private productsService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.sub =  this.activatedRoute.paramMap.subscribe((params)=>
    {
this.id = params.get('id'); 
console.log("id"+this.id);

this.productsService.getProduct(this.id).subscribe((data)=>
{
this.productItem=JSON.parse(JSON.stringify(data));
console.log(this.productItem);
});

console.log(this.productItem);
    });
}
ngOnDestroy()
{
this.sub.unsubscribe();
}
updateProduct()
{
console.log(this.productItem);
this.productsService.updateProduct(this.productItem);
console.log("one Product Updated!");
alert("one Product Updated!");
this.router.navigate(['/']);
}
}
