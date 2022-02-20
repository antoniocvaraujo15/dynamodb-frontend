import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKnowledgeComponent } from './add-edit-knowledge.component';

describe('AddEditKnowledgeComponent', () => {
  let component: AddEditKnowledgeComponent;
  let fixture: ComponentFixture<AddEditKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKnowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
