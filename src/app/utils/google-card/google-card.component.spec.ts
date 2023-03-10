import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCardComponent } from './google-card.component';

describe('GoogleCardComponent', () => {
  let component: GoogleCardComponent;
  let fixture: ComponentFixture<GoogleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
