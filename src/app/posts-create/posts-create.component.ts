import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Post } from '../post';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  constructor(private af: AngularFire) {
    af.auth.login()
  }

  ngOnInit() {
  }

  post: Post = new Post();

  onPostUpdate(postUpdate: Post) {
    postUpdate.date = new Date();
    this.af.auth
      // .login({email:'braungoodson@gmail.com',password:'vanillasky'})
      .login()
      .then(r => console.log(r))
      .then(s => {
        this.af.database.list('/posts')
          .push(postUpdate)
          .then(r => {
            this.af.auth.logout();
          })
          .catch(e => console.log('Error:',e))
        ;
        // console.log('ok');
      })
      .catch(e => console.log('Error:',e))
    ;
  }

}
