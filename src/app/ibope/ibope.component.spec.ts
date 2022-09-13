import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbopeComponent } from './ibope.component';

describe('IbopeComponent', () => {
  let component: IbopeComponent;
  let fixture: ComponentFixture<IbopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IbopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
