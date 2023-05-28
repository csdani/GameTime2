import { TestBed } from '@angular/core/testing';

import { PlayRecordService } from './play-record.service';

describe('PlayRecordService', () => {
  let service: PlayRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
