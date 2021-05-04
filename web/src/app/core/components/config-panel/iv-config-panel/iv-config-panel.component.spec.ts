import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvConfigPanelComponent } from './iv-config-panel.component';

describe('IvConfigPanelComponent', () => {
  let component: IvConfigPanelComponent;
  let fixture: ComponentFixture<IvConfigPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvConfigPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvConfigPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
