import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './models/movie';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators'

const apiUrl = 'http://localhost:3000/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  
  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      console.error(error);
      return of(result as T);
    };
  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>('http://127.0.0.1:3000/movies');
  }

  addMovie(movie: Movie): Observable<any>{
    return this.http.post(apiUrl, movie,  {responseType: 'text'}); 
  }

  /*
  addMovie(this.movieForm.value){
    const obj = {
      title,
      posterUrl,
      genre,
      rating
    };
    console.log(obj);
    this.http.post(`${this.apiUrl}/add`).subscribe(res => console.log("Done"));
  }
*/
  getMovieById(id: string): Observable<Movie>{
    const url = `${apiUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => console.log(`fetched movies id=${id}`)),
      catchError(this.handleError<Movie>('getMovieById id=${id}'))
    );
  }

  updateMovie(id: string, movie: Movie): Observable<any>{
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, movie).pipe(
      tap(_ => console.log(`updated movies id=${id}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

}
