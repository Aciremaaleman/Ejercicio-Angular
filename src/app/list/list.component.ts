import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service';
import { log } from 'util';
import { log } from 'util';
import { getMatFormFieldMissingControlError } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  template: `
  <mat-list>
    <p mat-subheader>News</p>
    <mat-divider></mat-divider>
      <mat-list-item *ngFor="let item of listNews">
        <mat-icon mat-list-icon>thumbs-up</mat-icon>
        <h1 mat-line>{{item.title}}</h1>
        <a mat-line href="{{item.url}}">{{item.url}}</a>
      </mat-list-item>
      <hr>
  </mat-list>
  `,
  providers: [NewServiceService]
})
export class ListComponent implements OnInit {

  public listNews;

  constructor(private _newServiceService: NewServiceService ) { }

  ngOnInit() {
    this._newServiceService.getNews()
        .subscribe( items => this.listNews = items,
                    error => console.log('ERROR TO GET THE NEWS'));

  }

}

