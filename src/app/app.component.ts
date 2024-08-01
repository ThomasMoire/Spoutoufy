import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterLink, Routes } from '@angular/router';
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
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
