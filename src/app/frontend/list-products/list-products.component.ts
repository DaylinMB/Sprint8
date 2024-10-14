import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarComponent],
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  listProduct: Product[] = [];
  loading: boolean = false;

  constructor(
    private _productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.listProduct = data;
      this.loading = false; 
    });
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe (() => {
       this.getListProducts();
       this.toastr.warning('El producto fue eliminado con exito','Producto eliminado');
      }
    );
  }
  
}


// deleteProduct(id: number) {
//   this.loading = true;
//   this._productService.deleteProduct(id).subscribe(
//     () => {
//       this.getListProducts();
//     },
//     (error) => {
//       this.loading = false;
//       console.error('Error al eliminar el producto:', error);
//       alert('Ocurrió un error al eliminar el producto. Verifica la consola para más detalles.');
//     }
//   );
// }
