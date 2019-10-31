import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { MovienatorService } from '../movienator.service';




@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  

  constructor(public dialogRef:MatDialogRef<MoviedetailComponent>,public movienatorService:MovienatorService,
    @Inject(MAT_DIALOG_DATA) public data:any){
       console.log(data)
    }

  ngOnInit() {
  }
  
}
