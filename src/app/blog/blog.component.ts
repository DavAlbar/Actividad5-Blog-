import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule], // Agregar CommonModule a las importaciones
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  publicaciones = [
    {
      titulo: 'Noticia 1',
      imagen: 'https://via.placeholder.com/150',
      texto: 'Este es el cuerpo de la noticia 1.',
      fecha: new Date().toLocaleDateString(),
    },
    {
      titulo: 'Noticia 2',
      imagen: 'https://via.placeholder.com/150',
      texto: 'Este es el cuerpo de la noticia 2.',
      fecha: new Date().toLocaleDateString(),
    },
  ];

  nuevaPublicacion = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
  };

  agregarPublicacion() {
    if (
      this.nuevaPublicacion.titulo &&
      this.nuevaPublicacion.imagen &&
      this.nuevaPublicacion.texto
    ) {
      this.nuevaPublicacion.fecha = new Date().toLocaleDateString();
      this.publicaciones.push({ ...this.nuevaPublicacion });
      this.nuevaPublicacion = { titulo: '', imagen: '', texto: '', fecha: '' };
    } else {
      alert('Todos los campos son obligatorios');
    }
  }
}
