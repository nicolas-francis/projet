import { TestBed, inject } from '@angular/core/testing';
import { PhaseService } from '../service/phase.service';

describe('PhaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhaseService]
    })
  });

  it('should be created', inject([PhaseService], (service: PhaseService) => {
    expect(service).toBeTruthy();
  }));
});