import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private post: FirebaseObjectObservable<Post>;

  constructor(
    private af: AngularFire,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.post = this.af.database
          .object('/posts/'+params['pid'])
        ;
      })
     ;
    // this.post = this.af.database('/posts/'+pid)
  }

}
