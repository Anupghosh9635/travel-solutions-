import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName :string = 'Anup'
  lastName :string = 'Ghosh'
  imagePath : any ='assets/images/package2.jpg' 

  // imagePath: any = 'assets/images/icon/uploadImage.jpg';
  onSelectFile(event) { // called each time file input changes
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.imagePath = event.target.files;
      console.log('imagePath' + this.imagePath);
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.imagePath = reader.result; //add source to image
        // console.log('url---'+this.urlData)
      }
    }
  }

}
