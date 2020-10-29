import { TestBed } from '@angular/core/testing';

import { NgTestLibraryService } from './ng-test-library.service';

describe('NgTestLibraryService', () => {
  let service: NgTestLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTestLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
