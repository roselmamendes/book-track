import { Component } from '@angular/core';
import { Book } from '../model/book';
import { MatTableModule } from '@angular/material/table';

const ALL_BOOKS: Book[] = [
  {titulo: "A Quinta Estação", autora: "N. K. Jemisin", genero: "Scifi"},
  {titulo: "A Sombra do Vento", autora: "Carlos Ruiz Záfon", genero: "Mistério"}
]

@Component({
  selector: 'app-root',
  imports: [MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-track';
  columnsToShow: string[] = ['titulo', 'autora', 'genero'];
  allBooks = ALL_BOOKS;
}
