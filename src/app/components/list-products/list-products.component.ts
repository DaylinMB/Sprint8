import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ CommonModule, RouterModule   ],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})

export class ListProductsComponent implements OnInit {
  listProduct: Product [] = [
    { id: 1, name: 'Cascos', description: 'Cascos para gamers', price: 250, stock: 20 },
    { id: 2, name: 'Mause', description: 'Mauise inalambrico', price: 27, stock: 50 }
  ]

  constructor( private _productService: ProductService) {}

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this._productService.getListProducts().subscribe((data) => {
      console.log(data);
    })
  }


}




