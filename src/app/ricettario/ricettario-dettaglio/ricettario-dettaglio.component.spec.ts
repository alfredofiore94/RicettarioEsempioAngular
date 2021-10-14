import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettarioDettaglioComponent } from './ricettario-dettaglio.component';

describe('RicettarioDettaglioComponent', () => {
  let component: RicettarioDettaglioComponent;
  let fixture: ComponentFixture<RicettarioDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicettarioDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettarioDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
