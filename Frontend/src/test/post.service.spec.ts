/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostService } from '../app/shared/services/post.service';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService]
    });
  });

  it('should ...', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
