import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/models/IPost';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  postsSubscription!: Subscription;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postsSubscription = this.postService.getPosts().subscribe((data) => {
        this.posts = data;
      })
  }

  nOnDestroy(): void {
    this.postService && this.postsSubscription.unsubscribe();
  }

}

