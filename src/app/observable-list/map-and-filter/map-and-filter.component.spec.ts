import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndFilterComponent } from './map-and-filter.component';

describe('MapAndFilterComponent', () => {
  let component: MapAndFilterComponent;
  let fixture: ComponentFixture<MapAndFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapAndFilterComponent]
    });
    fixture = TestBed.createComponent(MapAndFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
