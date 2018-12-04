import { TestBed, inject } from '@angular/core/testing';
import { PrioriteService } from '../service/priorite.service';

describe('PrioriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrioriteService]
    })
  });

  it('should be created', inject([PrioriteService], (service: PrioriteService) => {
    expect(service).toBeTruthy();
  }));
});