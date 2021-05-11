import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentTeamComponent } from './opponent-team.component';

describe('OpponentTeamComponent', () => {
  let component: OpponentTeamComponent;
  let fixture: ComponentFixture<OpponentTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpponentTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpponentTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
