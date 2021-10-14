import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettarioListaComponent } from './ricettario-lista.component';

describe('RicettarioListaComponent', () => {
  let component: RicettarioListaComponent;
  let fixture: ComponentFixture<RicettarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicettarioListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
