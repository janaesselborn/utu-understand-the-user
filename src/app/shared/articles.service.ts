import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articleListRef: AngularFireList<any>;


  constructor(private db: AngularFireDatabase) { }

  // Get all articles
  getArticles() {
    this.articleListRef = this.db.list('/articles');
    return this.articleListRef;
  }
}
