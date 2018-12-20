import {
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule
  } from '@angular/material'
  import { NgModule } from '@angular/core'
  
  @NgModule({
    imports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatSidenavModule,
      MatListModule,
      MatDialogModule,
      MatSnackBarModule,
      MatGridListModule
    ],
    exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatSidenavModule,
      MatListModule,
      MatDialogModule,
      MatSnackBarModule,
      MatGridListModule
    ],
  })
  export class MaterialModule {}
  