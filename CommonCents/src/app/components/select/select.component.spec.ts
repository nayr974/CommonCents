import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        NzSelectModule,
        NzSkeletonModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the selected value change event', () => {
    component.selectedValueChange.subscribe((selectedValue: string) =>
      expect(selectedValue).toBe('DRINK')
    );
    component.onSelectedValueChange('DRINK');
  });
});
