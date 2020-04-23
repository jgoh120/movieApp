import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { EditMovieDetailComponent } from './edit-movie-detail/edit-movie-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {
    path:'movies',
    component: MoviesComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'new-movie',
    component: NewMovieComponent
    // data: { title: 'Add Movie' }
  },
  {
    path: 'movies-list',
    component: MoviesListComponent
  },
  {
    path: 'edit-movie/:id',
    component: EditMovieDetailComponent,
    // data: { title: 'Edit Sales'}
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path:'**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
