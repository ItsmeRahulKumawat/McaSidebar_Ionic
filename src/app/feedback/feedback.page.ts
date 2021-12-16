/* eslint-disable @typescript-eslint/naming-convention */
import { AlertController } from '@ionic/angular';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
enum COLORS{
  GREY ='#E0E0E0',
  GREEN = '#76FF03',
  YELLOW = '#FFCA28',
  RED= '#DD2C00'
}
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  @Input() rating: number ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  name: string;
  email: string;
  feedback: string;

  constructor(public alertController: AlertController) {
  }

  ngOnInit() {
  }
 async feed(event) {
    const alert1 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: '',
      message: `Thank you ${this.name}`,
      buttons: ['OK', 'Cancel']
    });
    await alert1.present();
  }
  rate(index: number) {
    this.rating=index;
    this.ratingChange.emit(this.rating);
 }
 getColor(index: number) {
  if(this.isAboveRating(index)){
    return COLORS.GREY;
  }
  switch(this.rating)
  {
    case 1:
    case 2:
    return COLORS.RED;
    case 3:
    return COLORS.YELLOW;
    case 4:
      case 5:
    return COLORS.GREEN;
    default:
      return COLORS.GREY ;
  }
}

isAboveRating(index: number): boolean {
return index> this.rating;
}

}

