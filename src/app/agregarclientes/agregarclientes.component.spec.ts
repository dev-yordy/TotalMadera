import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarclientesComponent } from './agregarclientes.component';

describe('AgregarclientesComponent', () => {
  let component: AgregarclientesComponent;
  let fixture: ComponentFixture<AgregarclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
