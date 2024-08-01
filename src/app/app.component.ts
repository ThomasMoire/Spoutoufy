import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { CarouselComponent } from '../components/carousel/carousel.component';
import { MusicCardComponent } from '../components/music-card/music-card.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, FileUploadComponent, FooterComponent, HeaderComponent, AppComponent, CarouselComponent, MusicCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  musicUrl: string = 'localhost:3008/musics';
  title = 'Spoutoufy';
  text: string = "";
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        console.log('Suppression confirmée');
        // Appeler la méthode de suppression ici
      } else {
        console.log('Suppression annulée');
      }
    });
  }
}
