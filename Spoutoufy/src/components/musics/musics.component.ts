import { Component, OnInit } from '@angular/core';
import { Music } from '../../interfaces/Music';
import { APIService } from '../../services/API/api.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-musics',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.css'
})
export class MusicsComponent implements OnInit {

  constructor(private API: APIService) { }

  musics: Music[] = [];

  ngOnInit(): void {
    this.API.getMusics().subscribe((musics)=> {
      this.musics = musics
    })
  }
}
