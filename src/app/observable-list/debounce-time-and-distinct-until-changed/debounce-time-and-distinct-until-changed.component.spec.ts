import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeAndDistinctUntilChangedComponent } from './debounce-time-and-distinct-until-changed.component';

describe('DebounceTimeAndDistinctUntilChangedComponent', () => {
  let component: DebounceTimeAndDistinctUntilChangedComponent;
  let fixture: ComponentFixture<DebounceTimeAndDistinctUntilChangedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebounceTimeAndDistinctUntilChangedComponent]
    });
    fixture = TestBed.createComponent(DebounceTimeAndDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
