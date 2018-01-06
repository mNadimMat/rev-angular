import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {Cours} from '../cours';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-page-cours',
  templateUrl: './page-cours.component.html',
  styleUrls: ['./page-cours.component.css']
})
export class PageCoursComponent implements OnInit {

  @ViewChild('f') f:NgForm;
  private courses:Cours[]=[{id:1,title:"haha",content:"hahahi"},
    {id:2,title:"haha",content:"484484"}

  ];

  parent:AppComponent;
  constructor(private  inj:Injector,private router:Router) {
    this.parent = this.inj.get(AppComponent);
    console.log(this.parent.connected);
    if (!this.parent.connected){
      this.router.navigateByUrl('login');
    }

    console.log(this.courses.length);

  }

  public details(course:Cours){
      this.parent.course = course;

  }

  public delete(id:number){


    this.courses.forEach((item,index)=>{
      if(item.id == id)
        this.courses.splice(index,1);
    });





  }

  public add(course:Cours){
        this.courses.push(course);
        this.f.setValue({id:"",title:"",content:""});
  }

  ngOnInit() {
  }

}
