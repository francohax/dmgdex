import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPanelContainerComponent } from './config-panel-container.component';

describe('ConfigPanelContainerComponent', () => {
  let component: ConfigPanelContainerComponent;
  let fixture: ComponentFixture<ConfigPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPanelContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
