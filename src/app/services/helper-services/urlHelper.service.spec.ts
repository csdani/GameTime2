import { TestBed } from '@angular/core/testing';

import { URLHelperService } from './urlHelper.service';

describe('URLHelperService', () => {
  let service: URLHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(URLHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
