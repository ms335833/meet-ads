import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { BestellingenComponent } from './pages/bestellingen/bestellingen.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdvertentiesComponent } from './pages/advertenties/advertenties.component';
import { Bestellingen2Component } from './pages/bestellingen2/bestellingen2.component';
import { BedrijfComponent } from './pages/bedrijf/bedrijf.component';
import { Advertenties2Component } from './pages/advertenties2/advertenties2.component';
import { KlantenComponent } from './pages/klanten/klanten.component';
import { FacturenComponent } from './pages/facturen/facturen.component';
import { WebshopComponent } from './pages/webshop/webshop.component';
import { TransactieComponent } from './pages/transactie/transactie.component';
import { Facturen2Component } from './pages/facturen2/facturen2.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'bestellingen', component: BestellingenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'advertenties', component: AdvertentiesComponent },
  { path: 'bestellingen2', component: Bestellingen2Component },
  { path: 'bedrijf', component: BedrijfComponent },
  { path: 'advertenties2', component: Advertenties2Component },
  { path: 'klanten', component: KlantenComponent },
  { path: 'facturen', component: FacturenComponent },
  { path: 'webshop', component: WebshopComponent },
  { path: 'transactie', component: TransactieComponent },
  { path: 'facturen2', component: Facturen2Component },
  { path: 'login', component: CreateAccountComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
