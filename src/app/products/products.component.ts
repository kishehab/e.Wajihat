import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products = [
		{id: '1', name:'iPhone'},
		{id: '2', name:'iPad'},
		{id: '3', name:'iMac'},
		{id: '4', name:'iWatch'}
	]
  constructor( private router:Router) { }

  ngOnInit() {
  }

  onSelect(product){
  	this.router.navigate(['/products', product.id]);
  }

}
