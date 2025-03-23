import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  hasPlan: boolean = false;

  //constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkPlanStatus();
  }

  // Verificar si el usuario tiene un plan activo
  checkPlanStatus() {
    /*const user = this.authService.getUserInfo();
    if (user && user.plan) {
      this.hasPlan = true; // El usuario tiene plan
    }*/
  }

  // Redirigir al usuario a la página de planes
  redirectToPlans() {
    //this.router.navigate(['/pricing']); // Cambiar la ruta de acuerdo a tu configuración
  }
}
