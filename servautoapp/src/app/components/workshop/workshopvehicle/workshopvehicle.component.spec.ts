import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopvehicleComponent } from './workshopvehicle.component';

describe('WorkshopvehicleComponent', () => {
  let component: WorkshopvehicleComponent;
  let fixture: ComponentFixture<WorkshopvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopvehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
