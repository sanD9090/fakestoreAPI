import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productlist: any;
  filterCategory: any;
  constructor(private api: ApiService, private cartservice: CartService) {}

  ngOnInit(): void {
    this.api.getproduct().subscribe((res) => {
      this.productlist = res;
      this.filterCategory = res;
    });
  }
  addtocart(item: any) {
    this.cartservice.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory=this.productlist.filter((a:any)=>{
      if(a.category== category || category==""){
        return a;
      }
    })
  }
}
