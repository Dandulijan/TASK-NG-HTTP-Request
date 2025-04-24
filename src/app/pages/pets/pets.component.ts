import { Component, effect, signal } from '@angular/core';
import { PetsHeaderComponent } from '../../components/pets-header/pets-header.component';
import { PetsListComponent } from '../../components/pets-list/pets-list.component';
import { PetService } from '../../shared/services/pet.service';
import { catchError, of } from 'rxjs';
import { Pet, pets } from '../../../data/pets';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PetsHeaderComponent, PetsListComponent],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  query = '';

  Pets$ = signal<Pet[]>([]);
  error: string | null = null; // Property to store error messages

  constructor(private _petService: PetService, http: HttpClient) {
    effect(() => {
      this._petService.getPets().subscribe((response) => {
        console.log(response); // log the response
        this.Pets$.set(response); // ✅ Update signal
      });
    });
  }
  setQuery(query: string) {
    this.query = query;
  }

  get filteredPets() {
    return this.Pets$().filter((pet: { name: string }) =>
      pet.name.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
