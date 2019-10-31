import { TestBed } from '@angular/core/testing';

import { MovienatorService } from './movienator.service';

describe('MovienatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovienatorService = TestBed.get(MovienatorService);
    expect(service).toBeTruthy();
  });
});
