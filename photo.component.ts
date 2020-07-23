import { Component, OnInit } from '@angular/core';
import { PhotolistService} from '../photolist.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  public photos = [];

  constructor(private _photoListService: PhotolistService) { }

  ngOnInit(){
    this.photos = this._photoListService.getPhotos();
  }

}
