import { TestBed } from '@angular/core/testing';

import { AdminTemplateService } from './admin-template.service';

describe('AdminTemplateService', () => {
  let service: AdminTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
