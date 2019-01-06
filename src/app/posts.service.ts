import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { map } from 'rxjs/operators';
// import get from 'lodash/get';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}
  private baseURL = 'https://ambercreative.sg';
  fetchPosts() {
    return this.http
      .get(`${this.baseURL}/wp-json/wp/v2/posts?_embed`);
  }

  fetchPost(post_id: string) {
    return this.http
      .get(`${this.baseURL}/wp-json/wp/v2/posts/${post_id}?_embed`);
  }


  fetchPostCategories() {
    return this.http.get(`${this.baseURL}/wp-json/wp/v2/categories`);
  }

  fetchPostsByCategory(category_id: string) {
    return this.http
      .get(
        `${this.baseURL}/wp-json/wp/v2/posts?_embed&categories=${category_id}`);
  }

}
