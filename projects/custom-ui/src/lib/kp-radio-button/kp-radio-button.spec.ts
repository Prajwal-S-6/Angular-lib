import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpRadioButton } from './kp-radio-button';

describe('KpRadioButton', () => {
  let component: KpRadioButton;
  let fixture: ComponentFixture<KpRadioButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpRadioButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpRadioButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
