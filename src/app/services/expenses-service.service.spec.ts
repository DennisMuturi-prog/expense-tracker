import { TestBed } from '@angular/core/testing';

import { ExpensesService} from './expenses-service.service';

describe('ExpensesService', () => {
  let service: ExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
