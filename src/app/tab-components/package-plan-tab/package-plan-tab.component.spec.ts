import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePlanTabComponent } from './package-plan-tab.component';

describe('PackagePlanTabComponent', () => {
  let component: PackagePlanTabComponent;
  let fixture: ComponentFixture<PackagePlanTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagePlanTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagePlanTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
