import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() foto_personaje: string = "Foto del personaje";
  @Input() nombre_personaje: string = "Nombre del personaje";
  @Input() descripcion_personaje: string = "Descripción del personaje";

}
