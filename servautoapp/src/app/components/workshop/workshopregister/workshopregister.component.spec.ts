import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopregisterComponent } from './workshopregister.component';

describe('WorkshopregisterComponent', () => {
  let component: WorkshopregisterComponent;
  let fixture: ComponentFixture<WorkshopregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
