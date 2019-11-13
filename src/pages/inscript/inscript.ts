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
  Datnais: string ="";
  Tel : string = "";
  Email : string = "";
  Pass : string = "";
  Cmpass : string = "";

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
        message: 'Nom requis',
        duration: 2500
      });
      toast.present();
      }else if(this.Prenom == ""){
        const toast = this.toastCtrl.create({
          message: 'Prenom requis',
          duration: 2500
        });
        toast.present();  
      }else if(this.Datnais ==""){
        const toast = this.toastCtrl.create({
          message: 'Date de naissance requise',
          duration: 2500
        });
        toast.present();  
      }else if(this.Tel ==""){
        const toast = this.toastCtrl.create({
          message: 'Numero de télephone requis',
          duration: 2500
        });
        toast.present();
      }else if(this.Email ==""){
        const toast = this.toastCtrl.create({
          message: 'Email requis',
          duration: 2500
        });
        toast.present();
      }else if(this.Pass ==""){
        const toast = this.toastCtrl.create({
          message: 'Mot de passe requis',
          duration: 2500
        });
        toast.present();
      }else if(this.Pass!= this.Cmpass){
        const toast = this.toastCtrl.create({
          message: 'Erreur de correspondance du Mot de Passe',
          duration: 2500
        });
        toast.present();
      }
    else{

      let body = {

          Nom: this.Nom,
          Prenom: this.Prenom,
          Datnais: this.Datnais,
          Tel: this.Tel,
          Email :this.Email,
          Pass: this.Pass,
          Cmpass: this.Cmpass,
          req:'Add'
      };
      this.postPvdr.postData(body, 'user.php').subscribe((data)=>
      { 
        var alertpesan = data.msg;
        if(data.success){
          this.navCtrl.pop();
          const toast = this.toastCtrl.create({
            message: 'Enregistrement effectué',
            duration: 2500
          });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 2500
          });
          toast.present();
          }
        }); 
        
        console.log(this.Nom);
        console.log(this.Prenom);
        console.log(this.Datnais);
        console.log(this.Tel);
        console.log(this.Email);
        console.log(this.Pass);
      }

    }
    


}
