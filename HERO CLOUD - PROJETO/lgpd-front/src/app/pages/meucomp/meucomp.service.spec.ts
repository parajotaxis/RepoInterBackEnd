import { TestBed } from '@angular/core/testing';

import { MeucompService } from './meucomp.service';

describe('MeucompService', () => {
  let service: MeucompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeucompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
