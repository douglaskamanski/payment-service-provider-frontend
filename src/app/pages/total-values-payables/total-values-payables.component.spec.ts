import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValuesPayablesComponent } from './total-values-payables.component';

describe('TotalValuesPayablesComponent', () => {
  let component: TotalValuesPayablesComponent;
  let fixture: ComponentFixture<TotalValuesPayablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalValuesPayablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalValuesPayablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
