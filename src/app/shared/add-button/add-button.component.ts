import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  @Output() onClick = new EventEmitter<any>();

  ngOnInit(): void {}
  onClickButton(event) {
    this.onClick.emit(event);
  }
}
