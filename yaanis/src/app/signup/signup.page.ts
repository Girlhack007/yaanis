import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthentificationService } from '../authentification.service';
// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm!: FormGroup;
  constructor(public FormBuilder: FormBuilder, public  loadingCtrl: LoadingController, public authService: AuthentificationService) { }

  ngOnInit() {
    this.regForm = this.FormBuilder.group({
      fullname: ['', [Validators.required], Validators.email,
       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')],
      email: ['',  [Validators.required]],
      password: ['', [Validators.required], Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')],
    });

  }
get errorControl(){
return this.regForm?.controls;
}
    async signUp(){
      const loading = await this.loadingCtrl.create();
    await loading.present();
if(this.regForm?.valid){
// const user =await this.authService.registerUser(email,password)
}
    }

    async singUp(){

    }
}

