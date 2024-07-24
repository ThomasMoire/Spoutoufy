import { Routes } from '@angular/router';
import { MusicsComponent } from '../components/musics/musics.component';
import { AlbumsComponent } from '../components/albums/albums.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { CGUComponent } from '../components/cgu/cgu.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    {path: "musics",component:MusicsComponent},
    {path : "albums", component:AlbumsComponent},
    {path : "upload", component:FileUploadComponent},
    {path: "CGU", component:CGUComponent},
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginComponent},
    
];
