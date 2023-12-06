import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  cols: string[];
}

@Component({
  selector: 'app-table-settings',
  templateUrl: './table-settings.component.html',
  styleUrls: ['./table-settings.component.scss']
})
export class TableSettingsComponent {

  checked: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<TableSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.checked = [...data.cols];
  }

  onChangeCol(ev: any, col: string): void {
    if (ev.checked && !this.checked.includes(col)) {
      this.checked.push(col);
    } else if (this.checked.includes(col)) {
      this.checked.splice( this.checked.findIndex( e => col), 1 );
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
