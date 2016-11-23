import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts: FirebaseListObservable<Post>;

  constructor(
    private af: AngularFire
  ) {
    
  }

  ngOnInit() {
    this.af.auth.login()
      .then(() => {
        this.posts = this.af.database.list('/posts');
      })
    ;
  }

}
