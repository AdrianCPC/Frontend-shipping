import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDeleteComponent } from './shipping-delete.component';

describe('ShippingDeleteComponent', () => {
  let component: ShippingDeleteComponent;
  let fixture: ComponentFixture<ShippingDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
