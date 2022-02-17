import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_list = ["firstItem", "secondItem"];
  public title= "E-COMMERCE";


  constructor() { }

  ngOnInit(): void {
  }

}
