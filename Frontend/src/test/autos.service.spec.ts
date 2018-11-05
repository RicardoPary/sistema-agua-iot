/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutosService } from '../app/shared/services/autos.service';

describe('AutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutosService]
    });
  });

  it('should ...', inject([AutosService], (service: AutosService) => {
    expect(service).toBeTruthy();
  }));
});
