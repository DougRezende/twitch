import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplausosComponent } from './aplausos.component';

describe('AplausosComponent', () => {
  let component: AplausosComponent;
  let fixture: ComponentFixture<AplausosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplausosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AplausosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
