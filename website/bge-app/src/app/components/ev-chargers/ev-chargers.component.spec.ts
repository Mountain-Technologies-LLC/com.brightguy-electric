import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvChargersComponent } from './ev-chargers.component';

describe('EvChargersComponent', () => {
  let component: EvChargersComponent;
  let fixture: ComponentFixture<EvChargersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvChargersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvChargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
