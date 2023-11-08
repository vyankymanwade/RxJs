import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAndBehaviourSubjectComponent } from './subject-and-behaviour-subject.component';

describe('SubjectAndBehaviourSubjectComponent', () => {
  let component: SubjectAndBehaviourSubjectComponent;
  let fixture: ComponentFixture<SubjectAndBehaviourSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAndBehaviourSubjectComponent]
    });
    fixture = TestBed.createComponent(SubjectAndBehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
