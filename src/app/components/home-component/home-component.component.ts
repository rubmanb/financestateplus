import { Component } from '@angular/core';
import { PlanningComponent } from '../planning/planning.component';
import { TableplanningComponent } from '../tableplanning/tableplanning.component';

@Component({
  selector: 'home-component',
  imports: [PlanningComponent, TableplanningComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
})
export class HomeComponent {}
