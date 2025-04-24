import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Pet } from '../../../data/pets';

@Injectable({
  providedIn: 'root',
})
export class PetService extends ModalService {
  private apiUrl = 'https://pets-react-query-backend.eapi.joincoded.com/pets';

  getPets(): Observable<Pet[]> {
    return this.get<Pet[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error in PostsService:', error); // Log the error for debugging
        throw of([]); // Rethrow the error to propagate it to the component
      })
    );
  }
  getPetsbyID(id: number): Observable<Pet> {
    return this.get<Pet>(this.apiUrl + `/${id}`).pipe(
      catchError((error) => {
        console.error('Error in PostsService:', error); // Log the error for debugging
        throw of(); // Rethrow the error to propagate it to the component
      })
    );
  }
}
