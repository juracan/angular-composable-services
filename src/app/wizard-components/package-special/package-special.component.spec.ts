import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSpecialComponent } from './package-special.component';

describe('PackageSpecialComponent', () => {
  let component: PackageSpecialComponent;
  let fixture: ComponentFixture<PackageSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
