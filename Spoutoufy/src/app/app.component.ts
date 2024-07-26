import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileUploadComponent } from '../components/file-upload/file-upload.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, FileUploadComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Spoutoufy';
  text: string = "";

  constructor(private router: Router) {} // Injection via le constructeur

  onSubmit() {
    this.router.navigateByUrl("/search/" + this.text);
  }

  ngOnInit() {
    // document.body.style.backgroundColor = "#f5f5f5";
  }
  
}
