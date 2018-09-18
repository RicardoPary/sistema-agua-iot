/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SensoresService } from '../app/services/sensores.service';

describe('SensoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensoresService]
    });
  });

  it('should ...', inject([SensoresService], (service: SensoresService) => {
    expect(service).toBeTruthy();
  }));
});
