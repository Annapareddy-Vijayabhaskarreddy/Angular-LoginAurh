import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: LoginService) { }
  public products: any;
  ngOnInit(): void {
    this.service.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }

}
