import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { Post } from '../post';

@Component({
  selector: 'app-posts-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})
export class PostsCreateComponent implements OnInit {

  private post: Post;

  constructor(
    private af: AngularFire,
    private router: Router
  ) {
    // af.auth.login()
  }

  ngOnInit() {
    this.post = new Post(new Date().getTime(),'This is the title.','And this is the body.');
  }

  onPostUpdate(postUpdate: Post) {
    // this.af.auth
      // .login({email:'braungoodson@gmail.com',password:'vanillasky'})
      // .login()
      // .then(r => console.log(r))
      // .then(s => {
        this.af.database.list('/posts')
          .push(postUpdate)
          .then(r => {
            this.router.navigate(['/posts']);
          })
          .catch(e => console.log('Error:',e))
        ;
        // console.log('ok');
      // })
      // .catch(e => console.log('Error:',e))
    // ;
  }

}
