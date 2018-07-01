import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabArticlePage } from '../tab-article/tab-article';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabServicesPage } from '../tab-services/tab-services';
import { TabCoursePage } from '../tab-course/tab-course';



@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
//กำหนด ตัวแปรสำหรับเก็บชื่อ tab
   tab1Root: any= TabHomePage;
   tab2Root: any=TabCoursePage;
   tab3Root: any=TabServicesPage;
   tab4Root: any=TabArticlePage;
   tab5Root: any=TabContactPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
