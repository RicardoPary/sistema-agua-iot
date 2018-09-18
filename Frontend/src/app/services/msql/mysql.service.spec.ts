/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MysqlService } from './mysql.service';

describe('MysqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysqlService]
    });
  });

  it('should ...', inject([MysqlService], (service: MysqlService) => {
    expect(service).toBeTruthy();
  }));
});
