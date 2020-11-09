import { TestBed } from '@angular/core/testing';

import { UxStudioService } from './ux-studio.service';

describe('UxStudioService', () => {
  let service: UxStudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UxStudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
