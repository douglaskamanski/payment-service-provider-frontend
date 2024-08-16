import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaidPayablesComponent } from './list-paid-payables.component';

describe('ListPaidPayablesComponent', () => {
  let component: ListPaidPayablesComponent;
  let fixture: ComponentFixture<ListPaidPayablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPaidPayablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaidPayablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
