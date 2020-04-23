import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MoviesComponent } from './movies/movies.component';

import { HttpClientModule } from '@angular/common/http';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { EditMovieDetailComponent } from './edit-movie-detail/edit-movie-detail.component';

import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewMovieModalComponent } from './new-movie-modal/new-movie-modal.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ReviewsComponent,
    MoviesComponent,
    NewMovieComponent,
    EditMovieDetailComponent,
    NewMovieModalComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
