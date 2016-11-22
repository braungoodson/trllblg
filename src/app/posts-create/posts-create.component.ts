import { Component, OnInit } from '@angular/core';

import { Post } from '../post';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  post: Post = new Post();

  onPostUpdate(postUpdate: Post) {
    // console.log(postUpdate);
    // var newPostKey = firebase.database().ref().child('posts').push().key;
  }

}
