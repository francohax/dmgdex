import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveConfigPanelComponent } from './move-config-panel.component';

describe('MoveConfigPanelComponent', () => {
  let component: MoveConfigPanelComponent;
  let fixture: ComponentFixture<MoveConfigPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveConfigPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
