import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  public new_Text: string;
  public list_Text: Array<any>;

  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    console.log(this.list_Text = this._todoService.getText());
    console.log(this._todoService.test());
  }

  addtodo() {
    this.list_Text.push(this.new_Text);
    localStorage.setItem('key', JSON.stringify(this.list_Text));
    this.new_Text = null;
  }

  deleteItem(index: number) {
    this._todoService.deleteText(index);
    // this._todoService.deleteText(localStorage.removeItem('key'));
  }

}

  // protected newTextChanged(value: string): void {
  //   // const target = <HTMLInputElement> event.target;
  //   this.newtext = value;
  // }

  // private addtodo() {
  //   // console.log(this.text);
  //   localStorage.setItem('textItem', this.text);
  //   // tslint:disable-next-line:prefer-const
  //   let localS = localStorage.getItem('textItem');
  // }


