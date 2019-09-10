import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: Photo[] = [];
  constructor() { }
}
class Photo {
  data: any;
}