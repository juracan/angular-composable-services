import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipPlanTabComponent } from './membership-plan-tab.component';

describe('MembershipPlanTabComponent', () => {
  let component: MembershipPlanTabComponent;
  let fixture: ComponentFixture<MembershipPlanTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipPlanTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipPlanTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
