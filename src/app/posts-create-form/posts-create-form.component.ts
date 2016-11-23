import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Post } from '../post';

@Component({
  selector: 'app-posts-create-form',
  templateUrl: './posts-create-form.component.html',
  styleUrls: ['./posts-create-form.component.css']
})
export class PostsCreateFormComponent implements OnInit {

  @Output() postUpdate = new EventEmitter();

  @Input() post: Post;

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    this.postUpdate.emit(this.post);
  }

}
