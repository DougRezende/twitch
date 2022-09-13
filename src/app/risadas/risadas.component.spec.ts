import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisadasComponent } from './risadas.component';

describe('RisadasComponent', () => {
  let component: RisadasComponent;
  let fixture: ComponentFixture<RisadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RisadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RisadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
