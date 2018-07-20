import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  public new_item: 'algo';
  public colection_text = ['first', 'second'];


  test() {
    // tslint:disable-next-line:semicolon
    return this.new_item;
  }

  addText(new_item: string): Array<string> {
    this.colection_text.push(this.new_item);
    return this.getText();
  }

  getText() {
    this.colection_text = JSON.parse(localStorage.getItem('key'));
    return this.colection_text ;
  }

  deleteText(index: number): Array<string> {
      this.colection_text.splice(index, 1);
      return this.getText();
  }

}
