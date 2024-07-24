import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor(private http: HttpClient) {}

  getMusics(): Observable<{ name: string, url: string }[]> {
    return this.http.get<{ name: string, url: string }[]>('http://localhost:3008/audios');
  }

  uploadMusic(formData: FormData): Observable<{ url: string }> {
    return this.http.post<{ url: string }>('http://localhost:3008/upload', formData);
  }
}
