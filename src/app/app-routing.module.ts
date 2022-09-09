import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobComponent } from './job/job.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogoutComponent } from './logout/logout.component';
import { RecruitComponent } from './recruit/recruit.component';
import { CompanyComponent } from './company/company.component';
import { ApplyComponent } from './apply/apply.component';
import {JobsGuard} from './jobs.guard'
import { RecruitmentteamComponent } from './recruitmentteam/recruitmentteam.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'job',
    component: JobComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'recruit',
    component: RecruitmentteamComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'apply',
    component: ApplyComponent,
    canActivate: [JobsGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
