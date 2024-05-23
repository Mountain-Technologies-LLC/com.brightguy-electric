import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLightingComponent } from './new-lighting.component';

describe('NewLightingComponent', () => {
  let component: NewLightingComponent;
  let fixture: ComponentFixture<NewLightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLightingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewLightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
