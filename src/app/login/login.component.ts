import {Component, Injector, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any= {login:"",password:""};
  loginError:boolean=false;
  parent :AppComponent;
  constructor(private ls:LoginService,private router:Router,private i:Injector) {
    this.parent = this.i.get(AppComponent);
  }

  ngOnInit() {
  }

  public doLogin(user:any){

    this.ls.login(user).subscribe(data=>{

      try{
        let json = data.json();
        this.router.navigateByUrl('cours');
        this.parent.connected = true;
      }
      catch(e){
        console.log('login error');
        this.loginError = true;
      }
    },error=>{

    });

  }

}
