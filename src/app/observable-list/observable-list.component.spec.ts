import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableListComponent } from './observable-list.component';

describe('ObservableListComponent', () => {
  let component: ObservableListComponent;
  let fixture: ComponentFixture<ObservableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservableListComponent]
    });
    fixture = TestBed.createComponent(ObservableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
