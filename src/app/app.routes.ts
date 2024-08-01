import { Routes} from '@angular/router';
import { MusicsComponent } from '../components/musics/musics.component';
import { AlbumsComponent } from '../components/albums/albums.component';
import { CGUComponent } from '../components/cgu/cgu.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { LoginComponent } from '../components/login/login.component';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';


export const routes: Routes = [
    {path : "home",component:HomeComponent},
    {path : "musics",component:MusicsComponent},
    {path : "albums", component:AlbumsComponent},
    {path : "upload", component:FileUploadComponent},
    {path : "CGU", component:CGUComponent},
    {path : "login",component:LoginComponent},
    {path : "contact",component:ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'prefix'},
    
];
