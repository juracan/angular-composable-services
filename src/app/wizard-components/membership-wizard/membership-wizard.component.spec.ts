import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipWizardComponent } from './membership-wizard.component';

describe('MembershipWizardComponent', () => {
  let component: MembershipWizardComponent;
  let fixture: ComponentFixture<MembershipWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
