import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JobComponent } from './job/job.component';
import { MasterComponent } from './master/master.component';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { RecruitComponent } from './recruit/recruit.component';
import { CompanyComponent } from './company/company.component';
import { ApplyComponent } from './apply/apply.component';
import { RecruitmentteamComponent } from './recruitmentteam/recruitmentteam.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    AboutusComponent,
    JobComponent,
    MasterComponent,
    LogoutComponent,
    RecruitComponent,
    CompanyComponent,
    ApplyComponent,
    RecruitmentteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
