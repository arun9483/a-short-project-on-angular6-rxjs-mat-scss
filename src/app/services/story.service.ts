import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer, from } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';
import { Story } from './../models/story.model';

@Injectable()
export class StoryService {
  private serviceUrl = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  constructor(private http: HttpClient) { }
  getStories(): Observable<Story[]> {
    return timer(0, 10000)
      .pipe(concatMap(() => from(this.http.get<any>(this.serviceUrl))
        .pipe(map(response => response.hits)))
      );
  }
}
