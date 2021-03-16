import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadeclientesComponent } from './listadeclientes.component';

describe('ListadeclientesComponent', () => {
  let component: ListadeclientesComponent;
  let fixture: ComponentFixture<ListadeclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadeclientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadeclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
