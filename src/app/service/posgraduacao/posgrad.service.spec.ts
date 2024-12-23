import { TestBed } from '@angular/core/testing';

import { PosgradService } from './posgrad.service';

describe('PosgradService', () => {
  let service: PosgradService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosgradService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
