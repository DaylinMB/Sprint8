import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-editproduct',
  standalone: true,
  imports: [ CommonModule, RouterLink, ReactiveFormsModule, ProgressBarComponent ],
  templateUrl: './add-editproduct.component.html',
  styleUrl: './add-editproduct.component.css',
})


export class AddEditproductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operation: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operation = 'Editar';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.loading = false;
      this.form.patchValue({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
      });
    });
  }

  addProduct() {
    // console.log(this.form.value.name);
    // console.log(this.form.get('name')?.value);

    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    };

    this.loading = true;

    if (this.id !== 0) {
      //Es editar
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(
          `El producto ${product.name} fue actualizado con exito`,
          `Producto Actualizado`
        );
        this.loading = false;

        this.router.navigate(['/']);

      });
    } else {
      //Es agregar
      this._productService.saveProduct(product).subscribe(() => {
        this.toastr.success(
          `El producto ${product.name} fue registrado con exito`,
          `Producto Registrado`
        );
        this.loading = false;
        this.router.navigate(['/']);

      });
    }
  }
}
