import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../../../data/pets';
import { HttpClient } from '@angular/common/http';
import { PetService } from '../../shared/services/pet.service';
// import { Pet, pets } from '../../../data/pets';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css',
})
export class PetDetailsComponent {
  pet$ = signal<Pet | undefined>(undefined);

  private _petService = inject(PetService);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private https: HttpClient // private _petService: PetService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id); // log the id
    effect(() => {
      this._petService.getPetsbyID(id).subscribe({
        next: (response: Pet) => {
          console.log('Pet fetched:', response);
          this.pet$.set(response);
        },
        error: (err) => {
          console.error('Error fetching pet:', err);
        },
      });
    });
  }

  // get Pets() {
  //   return this.pet$().filter((pet: { name: string }) =>
  //     pet.name.toLowerCase().includes(this.query.toLowerCase())
  //   );
  // }
}
