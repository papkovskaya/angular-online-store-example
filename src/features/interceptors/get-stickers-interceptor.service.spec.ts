import { TestBed } from '@angular/core/testing';

import { GetStickersInterceptorService } from './get-stickers-interceptor.service';

describe('GetStickersInterceptorService', () => {
  let service: GetStickersInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStickersInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
