import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettarioItemComponent } from './ricettario-item.component';

describe('RicettarioItemComponent', () => {
  let component: RicettarioItemComponent;
  let fixture: ComponentFixture<RicettarioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicettarioItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettarioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
