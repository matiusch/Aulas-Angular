import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoreCompanyComponent } from './valore-company.component';

describe('ValoreCompanyComponent', () => {
  let component: ValoreCompanyComponent;
  let fixture: ComponentFixture<ValoreCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoreCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoreCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
