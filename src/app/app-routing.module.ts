import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingdataComponent } from './listingdata/listingdata.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  { path: 'listing', component: ListingdataComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'FileuploadComponent', component: FileuploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
