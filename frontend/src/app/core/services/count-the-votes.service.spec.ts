import { TestBed } from '@angular/core/testing';

import { CountTheVotesService } from './count-the-votes.service';

describe('CountTheVotesService', () => {
  let service: CountTheVotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountTheVotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
