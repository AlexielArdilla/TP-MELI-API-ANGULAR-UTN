import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinavbarComponent } from './minavbar.component';

describe('MinavbarComponent', () => {
  let component: MinavbarComponent;
  let fixture: ComponentFixture<MinavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinavbarComponent]
    });
    fixture = TestBed.createComponent(MinavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
