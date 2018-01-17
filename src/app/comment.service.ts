import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { COMMENTS } from './mock-comments'; 
import { CommaExpr } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentService {
  
  private commentsUrl = environment.commentsUrl;
  
  constructor(
    private http: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentsUrl).pipe(
      catchError(this.handleError('getComments', []))
    );

  }

  addComment(comment: Comment): Observable<Comment> {
    console.log(comment)
    return this.http.post<Comment>(this.commentsUrl, comment, httpOptions).pipe(
      tap((comment: Comment) => console.log(`added comment w/ id=${comment.id}`)),
      catchError(this.handleError<Comment>('addComment'))
    );
  }


private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
