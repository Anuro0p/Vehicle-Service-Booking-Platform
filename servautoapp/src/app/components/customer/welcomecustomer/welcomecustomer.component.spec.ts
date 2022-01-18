import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecustomerComponent } from './welcomecustomer.component';

describe('WelcomecustomerComponent', () => {
  let component: WelcomecustomerComponent;
  let fixture: ComponentFixture<WelcomecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomecustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
