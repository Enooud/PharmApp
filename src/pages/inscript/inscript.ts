import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProviders } from '../../providers/post-providers';



@Component({
  selector: 'page-inscript',
  templateUrl: 'inscript.html',
})
export class InscriptPage {

  Nom: string = "";
  Prenom: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, public postPvdr: PostProviders) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptPage');
  }

  Add_user(){
    console.log('fonction ok');
    if(this.Nom == ""){
      const toast = this.toastCtrl.create({
        message: ' le Nom requis',
        duration: 2500
      });
      toast.present();
      }else if(this.Prenom == ""){
        const toast = this.toastCtrl.create({
          message: ' le Prenom requis',
          duration: 2500
        });
        toast.present();  
      }
    else{

      let body = {

          Nom: this.Nom,
          Prenom: this.Prenom,
          req:'Add'
      };

      this.postPvdr.postData(body, 'user.php').subscribe((data)=>
      { 
        var alertpesan = data.msg;
        if(data.success){
          this.navCtrl.pop();
          const toast = this.toastCtrl.create({
            message: 'Enregistrement effectué',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
          }
        }); 
  
      }

    }
    


}
