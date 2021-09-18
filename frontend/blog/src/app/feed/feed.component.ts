import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[] = new Array(99);
  post: Post = new Post;
  nome: string = "";

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts() {
    this.postService.getPosts().subscribe(
      (data: Post[]) => {
        this.listPost = data;
      }
    )
  }

  cadastrarMensagem() {
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data
      location.assign('/feed')
    })
  }

}
