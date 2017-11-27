import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MatInkBar } from '@angular/material/tabs/typings/ink-bar';
import { CommentCardsComponent } from './comment-cards/comment-cards.component';
import { CommentService } from './comment.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CommentCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
