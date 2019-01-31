import { TestBed } from '@angular/core/testing';

import { NYTApiService } from './nytapi.service';

describe('NYTApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NYTApiService = TestBed.get(NYTApiService);
    expect(service).toBeTruthy();
  });
});
