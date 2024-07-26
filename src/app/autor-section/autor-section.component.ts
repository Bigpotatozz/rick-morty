import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-autor-section',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './autor-section.component.html',
  styleUrl: './autor-section.component.scss'
})
export class AutorSectionComponent {

}
