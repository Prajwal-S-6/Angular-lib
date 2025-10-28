import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpInput } from './kp-input';

describe('KpInput', () => {
  let component: KpInput;
  let fixture: ComponentFixture<KpInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
