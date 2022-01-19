import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessserviceComponent } from './businessservice.component';

describe('BusinessserviceComponent', () => {
  let component: BusinessserviceComponent;
  let fixture: ComponentFixture<BusinessserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
