import { TestBed } from '@angular/core/testing';

import { ToggleDrawerService } from './toggle-drawer.service';

describe('ToggleDrawerService', () => {
  let service: ToggleDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
