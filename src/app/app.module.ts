import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RegistrationModule } from './registration/registration.module';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
// import { UserComponent } from './components/user/user.component';
// import { ProjectsComponent } from './components/projects/projects.component';
// import { RegisterComponent } from './components/register/register.component';
// import { CreateProjectComponent } from './components/create-project/create-project.component';

const routes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        // UserComponent,
        // ProjectsComponent,
        // RegisterComponent,
        // CreateProjectComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RegistrationModule,
        RouterModule.forRoot(routes),
        HttpModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
