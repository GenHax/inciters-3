import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OdishaPage } from '../odisha/odisha';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  galleryType = 'regular';
  constructor(public navCtrl: NavController) { }
  
  gotoPage(image){
    console.log(image);
    this.navCtrl.push(OdishaPage);

  }
  
  // gotoPage(){
  //   console.log("image");
  //   // this.navCtrl.push(OdishaPage);

  // }
  }
