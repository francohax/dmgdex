import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvConfigPanelComponent } from './ev-config-panel.component';

describe('EvConfigPanelComponent', () => {
  let component: EvConfigPanelComponent;
  let fixture: ComponentFixture<EvConfigPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvConfigPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
