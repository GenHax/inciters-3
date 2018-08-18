import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandingPage } from './landing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  galleryType = 'regular';
  constructor(public navCtrl: NavController) { }
}
