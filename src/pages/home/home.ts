import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { InscriptPage } from '../inscript/inscript';
import { PostProviders } from '../../providers/post-providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  Villephar: string = "";
  Staphar: string = "";
  pharmacies: any = [];

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,
    public postPvdr: PostProviders) {

  }

  onGologin(){
    this.navCtrl.push(InscriptPage);
  }

  goSearch(){
    //controle entrée
    if(this.Villephar == "" && this.Staphar == ""){
      const toast = this.toastCtrl.create({
        message: 'Ville de la pharmacie requise',
        duration: 2500
      });
      toast.present();
      }else if(this.Villephar != "" && this.Staphar == ""){
        
      let body = {

        Villephar: this.Villephar,
        Staphar: this.Staphar,
        req:'rchphar1'
      };
      console.log('le premie else if bosse');
      this.postPvdr.postData(body, 'pharma.php').subscribe((data)=>
      {
        for (let pharmacie of data.result ){
          this.pharmacies.push(pharmacie);
        }
      });

      }else if(this.Villephar == "" && this.Staphar != ""){
      let body = {

        Villephar: this.Villephar,
        Staphar: this.Staphar,
        req:'rchphar2'
      };
      
      this.postPvdr.postData(body, 'pharma.php').subscribe((data)=>
      {
        for (let pharmacie of data.result ){
          this.pharmacies.push(pharmacie);
        }

    });

  } else {
    //insertion dans la bdd

    let body = {

      Villephar: this.Villephar,
        Staphar: this.Staphar,
        req:'rchphar'
    };
    
    this.postPvdr.postData(body, 'pharma.php').subscribe((data)=>
    {
      for (let pharmacie of data.result ){
        this.pharmacies.push(pharmacie);
      }
    }); 


  }

  console.log('suite');
  }
  


}
