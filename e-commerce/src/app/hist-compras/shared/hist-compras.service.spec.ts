import { TestBed } from '@angular/core/testing';

import { HistComprasService } from './hist-compras.service';

describe('HistComprasService', () => {
  let service: HistComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
