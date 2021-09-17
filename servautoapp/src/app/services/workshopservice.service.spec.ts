import { TestBed } from '@angular/core/testing';

import { WorkshopserviceService } from './workshopservice.service';

describe('WorkshopserviceService', () => {
  let service: WorkshopserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
