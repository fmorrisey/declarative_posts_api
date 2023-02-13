import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { IPost } from '../models/IPost';
import { APIService } from './api.service';

// 'https://posts-declarative-ang-default-rtdb.firebaseio.com/posts.json'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsURL: string;
  constructor(private http: HttpClient, api: APIService) {
    this.postsURL = api.postsURL()
  }

  public getPosts() {
    return this.http
      .get<{ [id: string]: IPost }>(
        this.postsURL
      )
      .pipe(
        map((posts) => {
          let postsData: IPost[] = [];
          for (let id in posts) {
            postsData.push({ ...posts[id], id });
          }
          return postsData;
        })
      );
  }
}
