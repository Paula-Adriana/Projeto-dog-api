import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDogsComponent } from './lista-dogs.component';

describe('ListaDogsComponent', () => {
  let component: ListaDogsComponent;
  let fixture: ComponentFixture<ListaDogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
