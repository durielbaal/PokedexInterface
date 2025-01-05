import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './root.component.html',
  styleUrl: './root.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RootComponent {

}
