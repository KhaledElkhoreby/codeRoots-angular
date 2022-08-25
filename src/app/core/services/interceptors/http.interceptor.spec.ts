import { TestBed } from '@angular/core/testing';

import { IndexInterceptor } from './http.interceptor';

describe('IndexInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [IndexInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: IndexInterceptor = TestBed.inject(IndexInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
