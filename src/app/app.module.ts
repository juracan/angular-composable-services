import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MembershipWizardComponent } from './wizard-components/membership-wizard/membership-wizard.component';
import { PackageWizardComponent } from './wizard-components/package-wizard/package-wizard.component';
import { ClientTabComponent } from './tab-components/client-tab/client-tab.component';
import { MembershipPlanTabComponent } from './tab-components/membership-plan-tab/membership-plan-tab.component';
import { PackagePlanTabComponent } from './tab-components/package-plan-tab/package-plan-tab.component';
import { PackageSpecialComponent } from './wizard-components/package-special/package-special.component';

@NgModule({
  declarations: [
    AppComponent,
    MembershipWizardComponent,
    PackageWizardComponent,
    ClientTabComponent,
    MembershipPlanTabComponent,
    PackagePlanTabComponent,
    PackageSpecialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
