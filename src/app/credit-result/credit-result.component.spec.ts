import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditResultComponent } from './credit-result.component';

describe('CreditResultComponent', () => {
  let component: CreditResultComponent;
  let fixture: ComponentFixture<CreditResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
