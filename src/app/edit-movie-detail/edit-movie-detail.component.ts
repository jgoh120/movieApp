import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'abc-edit-movie-detail',
  templateUrl: './edit-movie-detail.component.html',
  styleUrls: ['./edit-movie-detail.component.scss']
})
export class EditMovieDetailComponent implements OnInit {

  movieForm: FormGroup;
    id: '';
    title: '';
    posterUrl: string = '';
    genre: string = '';
    rating: number = null;

  constructor(private router: Router, private route: ActivatedRoute, private movieService: MovieService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getMovieById(this.route.snapshot.params.id);
    this.movieForm = this.formBuilder.group({
      id: [null, Validators.required],
      title: [null, Validators.required],
      posterUrl: [null, Validators.required],
      genre: [null, Validators.required],
      rating:[null, Validators.required]
    });
  }

  getMovieById(id: any){
    this.movieService.getMovieById(id).subscribe((data: any)=>{
      this.movieForm.setValue({
        id: data.id,
        title: data.title,
        genre: data.genre,
        rating: data.rating,
        posterUrl: data.posterUrl
      });
    });
  }

  onFormSubmit(){
    this.movieService.updateMovie(this.id, this.movieForm.value)
    .subscribe((res: any) => {
      this.router.navigate(['/movies']);
    }
    );
  }

  


}
