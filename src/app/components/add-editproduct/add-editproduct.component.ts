import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-add-editproduct',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-editproduct.component.html',
  styleUrl: './add-editproduct.component.css',
})
export class AddEditproductComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  addProduct() {
    console.log(this.form.value.name);
    console.log(this.form.get('name')?.value);

    const product: Product = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      stock: this.form.value.stock,
    };
    console.log(product);
  }
}
