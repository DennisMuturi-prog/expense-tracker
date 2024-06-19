import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecessityIndexComponent } from './necessity-index.component';

describe('NecessityIndexComponent', () => {
  let component: NecessityIndexComponent;
  let fixture: ComponentFixture<NecessityIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NecessityIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NecessityIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
