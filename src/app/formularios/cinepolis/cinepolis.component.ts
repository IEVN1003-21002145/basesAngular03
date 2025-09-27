import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  tarjetaCineco: any;
  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletos: number = 0;
  precioBoleto: number = 12;
  totalPagar: number = 0;

  calcularTotal() {

    const maxBoletosPermitidos = this.cantidadCompradores * 7;

    if (this.cantidadBoletos > maxBoletosPermitidos) {
      alert(`No puedes comprar más de ${maxBoletosPermitidos} boletos (${this.cantidadCompradores} compradores x 7 boletos cada uno).`);
      this.cantidadBoletos = maxBoletosPermitidos;
      this.totalPagar = 0;
      return;
    }

    if (this.cantidadBoletos <= 0) {
      alert('Cantidad de boletos no válida');
      this.totalPagar = 0;
      return;
    }

    this.totalPagar = this.cantidadBoletos * this.precioBoleto;

    // Descuentos
    if (this.cantidadBoletos >= 5) {
      this.totalPagar *= 0.85; // 15% de descuento
    } else if (this.cantidadBoletos >= 3) {
      this.totalPagar *= 0.9; // 10% de descuento
    }

    // Descuento adicional por tarjeta
    if (this.tarjetaCineco === 'si') {
      this.totalPagar *= 0.9; // 10% de descuento adicional
    }
  }
}
