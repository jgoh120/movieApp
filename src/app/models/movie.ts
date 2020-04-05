import { NullTemplateVisitor } from '@angular/compiler';

export type Movie = {
    id: number;
    title: string;
    posterUrl: string;
    genre: string;
    rating: number;
}