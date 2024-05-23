import { Routes } from '@angular/router';
import { LicenseComponent } from './components/license/license.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { EvChargersComponent } from './components/ev-chargers/ev-chargers.component';
import { NewLightingComponent } from './components/new-lighting/new-lighting.component';
import { RemodelingComponent } from './components/remodeling/remodeling.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'ev-chargers', component: EvChargersComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'new-lighting', component: NewLightingComponent },
  { path: 'remodeling', component: RemodelingComponent },
  { path: 'sign-in', component: SignInComponent },
];
