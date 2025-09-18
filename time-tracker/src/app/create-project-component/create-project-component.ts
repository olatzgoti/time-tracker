import { Component, inject, signal } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose, 
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { ModalContentComponent } from '../modal-content-component/modal-content-component';

export interface DialogData {
  name: string;
  description: string;
  urgency: number;
}
@Component({
  selector: 'app-create-project-component',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, ModalContentComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './create-project-component.html',
  styleUrl: './create-project-component.css'
})

export class CreateProjectComponent {

  readonly projectName = signal('');
  readonly dialog = inject(MatDialog);
  name : string ='';
  description : string = '';
  urgency : string = '';
  
openModal(): void{
  this.dialog.open(ModalContentComponent)
  console.log('holi');

}

}
