import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageWizardComponent } from './package-wizard.component';

describe('PackageWizardComponent', () => {
  let component: PackageWizardComponent;
  let fixture: ComponentFixture<PackageWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
