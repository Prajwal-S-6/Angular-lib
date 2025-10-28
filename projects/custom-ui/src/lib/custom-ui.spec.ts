import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUi } from './custom-ui';

describe('CustomUi', () => {
  let component: CustomUi;
  let fixture: ComponentFixture<CustomUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
