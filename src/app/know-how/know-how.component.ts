import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/article';
import {ArticlesService} from '../shared/articles.service';

@Component({
  selector: 'app-know-how',
  templateUrl: './know-how.component.html',
  styleUrls: ['./know-how.component.scss'],
})
export class KnowHowComponent implements OnInit {
  articles: Article[] = [];
  panelOpenState = false;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    const articleRes = this.articleService.getArticles();
    articleRes.snapshotChanges().subscribe(res => {
      this.articles = [];
      res.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.articles.push(a as Article);
      });
    });
  }

}
