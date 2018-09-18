import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  @Input() titulo:any;

  constructor() { }

  ngOnInit() {

  }

}


