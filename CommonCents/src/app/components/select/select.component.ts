import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Option } from 'interfaces/common';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input()
  loading: boolean = false;

  @Input()
  placeholder: string = '';

  @Input()
  options: Option[] = [];

  @Output()
  selectedValueChange = new EventEmitter<string>();

  selectedValue: string | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectedValueChange = (value: string) => {
    this.selectedValueChange.emit(value);
  };
}
