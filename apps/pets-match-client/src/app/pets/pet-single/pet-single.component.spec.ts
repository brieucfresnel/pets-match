import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSingleComponent } from './pet-single.component';

describe('PetSingleComponent', () => {
  let component: PetSingleComponent;
  let fixture: ComponentFixture<PetSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
