import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSpesaModificaComponent } from './lista-spesa-modifica.component';

describe('ListaSpesaModificaComponent', () => {
  let component: ListaSpesaModificaComponent;
  let fixture: ComponentFixture<ListaSpesaModificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSpesaModificaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSpesaModificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
