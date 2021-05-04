import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input()
  loading: boolean = false;

  @Input()
  value: string = '';

  @Input()
  placeholder: string = '';

  @Output()
  selectedValueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onSelectedValueChange = (value: string) => {
    this.value = value;
    this.selectedValueChange.emit(value);
  };
}
