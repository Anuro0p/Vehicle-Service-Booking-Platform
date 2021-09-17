import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeworkshopComponent } from './welcomeworkshop.component';

describe('WelcomeworkshopComponent', () => {
  let component: WelcomeworkshopComponent;
  let fixture: ComponentFixture<WelcomeworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeworkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
