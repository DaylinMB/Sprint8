import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditproductComponent } from './add-editproduct.component';

describe('AddEditproductComponent', () => {
  let component: AddEditproductComponent;
  let fixture: ComponentFixture<AddEditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
