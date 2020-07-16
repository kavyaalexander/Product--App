import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor  
  {

  constructor(private injector:Injector) { }
  intercept(req,nxt){
    let authService=this.injector.get(ProductService)
let tokenizedReq=req.clone({
  setHeaders:{
    Authorization: `Bearer ${authService.getToken()}`
  }
})
return nxt.handle(tokenizedReq)
  }
}
