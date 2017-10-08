import { TestBed, inject } from '@angular/core/testing';

import { ScalladService } from './scallad.service';

describe('ScalladService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScalladService]
    });
  });

  it('should be created', inject([ScalladService], (service: ScalladService) => {
    expect(service).toBeTruthy();
  }));
});
