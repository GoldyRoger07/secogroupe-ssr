import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bahamas } from './bahamas';

describe('Bahamas', () => {
  let component: Bahamas;
  let fixture: ComponentFixture<Bahamas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bahamas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bahamas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
