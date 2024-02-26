import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RecetasComponent } from './recetas.component';

@NgModule({
  declarations: [
    RecetasComponent,
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
})
export class RecetasModule { }
