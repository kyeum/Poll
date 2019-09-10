import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  constructor(private camera: Camera, private storage: Storage, public photoService: PhotoService) { }
  data :any = 0;
  setPicture() {
    any : 100;
  }
  destroyPicture() {
    this.storage.clear();
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photoService.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });
    
      // Save all photos for later viewing
      this.storage.set('photos', this.photoService.photos);
    }, (err) => {
      // Handle error
      console.log("Camera issue: " + err);
    });
  }
  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photoService.photos = photos || [];
    });
  }
  ngOnInit() {
    this.loadSaved();
  }
}
