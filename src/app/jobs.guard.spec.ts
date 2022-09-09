import { TestBed } from '@angular/core/testing';

import { JobsGuard } from './jobs.guard';

describe('JobsGuard', () => {
  let guard: JobsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
