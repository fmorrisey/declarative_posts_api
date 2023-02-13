import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categoriesURL : string
  constructor(private http: HttpClient, api: APIService) {
    this.categoriesURL = api.categoriesURL();
  }

  getCategories(){
    return this.http.get(this.categoriesURL) 
  }
}

