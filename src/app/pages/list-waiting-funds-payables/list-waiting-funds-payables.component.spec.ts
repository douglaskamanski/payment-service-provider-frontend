import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWaitingFundsPayablesComponent } from './list-waiting-funds-payables.component';

describe('ListWaitingFundsPayablesComponent', () => {
  let component: ListWaitingFundsPayablesComponent;
  let fixture: ComponentFixture<ListWaitingFundsPayablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWaitingFundsPayablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWaitingFundsPayablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
