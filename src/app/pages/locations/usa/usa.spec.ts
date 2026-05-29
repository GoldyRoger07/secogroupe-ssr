import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usa } from './usa';

describe('Usa', () => {
  let component: Usa;
  let fixture: ComponentFixture<Usa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
