import { TestBed } from '@angular/core/testing';

import { ServiceDogService } from './service-dog.service';

describe('ServiceDogService', () => {
  let service: ServiceDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
