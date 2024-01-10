import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  storedMessages: any = [];
  myMessage: FormGroup;
  searchValue: string = '';
  constructor(private fb: FormBuilder) {
    this.myMessage = this.fb.group({
      msg: '',
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.storedMessages.push(this.myMessage.value.msg);
    localStorage.setItem('todo', this.storedMessages);
  }

  getMessage() {
    this.storedMessages.push(localStorage.getItem('todo'));
  }

  onClickDone() {
    this.storedMessages.splice(
      this.storedMessages.indexOf(this.storedMessages),
      1
    );
  }

  remove() {
    console.log(document.getElementById('.todoInput'));
  }
}
