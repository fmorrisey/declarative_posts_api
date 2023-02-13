import { Injectable } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class APIService {
    private _http: string = "https://";
    private _baseUrl: string = "posts-declarative-ang-default-rtdb.firebaseio.com/";
    private _endpoint: any = {
        posts : "posts.json",
        categories : "categories.json"
    };

    postsURL() : string {
        return this._http + this._baseUrl + this._endpoint.posts
    }

    categoriesURL() : string {
        return this._http + this._baseUrl + this._endpoint.categories
    }

}