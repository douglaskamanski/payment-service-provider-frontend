import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

//Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCard
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
