import { RouterModule, Routes } from '@angular/router';
import { MusicsComponent } from '../components/musics/musics.component';
import { AlbumsComponent } from '../components/albums/albums.component';
import { AppComponent } from './app.component';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';


export const routes: Routes = [
    {path: "musics",component:MusicsComponent},
    {path : "albums", component:AlbumsComponent}
];


NgModule({
    declarations: [
        AppComponent,
        MusicsComponent,
        AlbumsComponent,
        FileUploadComponent
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })