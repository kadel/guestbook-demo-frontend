import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { COMMENTS } from '../mock-comments';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comment-cards',
  templateUrl: './comment-cards.component.html',
  styleUrls: ['./comment-cards.component.css']
})
export class CommentCardsComponent implements OnInit {
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  getComments(): void {
      this.commentService.getComments().subscribe(comments => this.comments = comments)
  }

  add(author: string, text: string): void {
    author = author.trim();
    text = text.trim();

    if (!author) { return; }
    if (!text) { return; }

    this.commentService.addComment({ author, text } as Comment)
      .subscribe(comment => {
        this.comments.push(comment);
      });
  }


  ngOnInit() {
    this.getComments()
  }

}
