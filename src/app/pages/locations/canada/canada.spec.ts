import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canada } from './canada';

describe('Canada', () => {
  let component: Canada;
  let fixture: ComponentFixture<Canada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Canada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
