import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-autor-section',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbarComponent],
  templateUrl: './autor-section.component.html',
  styleUrl: './autor-section.component.scss'
})
export class AutorSectionComponent {

  @Input() foto_personaje: string = "Foto del personaje";
  @Input() nombre_personaje: string = "Nombre del personaje";
  @Input() descripcion_personaje: string = "Descripción del personaje";

}
