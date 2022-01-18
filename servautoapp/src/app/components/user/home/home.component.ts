import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  isShw:boolean=false;
  shw:boolean=false;
  isShow:boolean=false;
  tog:boolean=false;
  ngOnInit(): void {
  }

      closs(){
      this.isShw=false;
      this.isShow=false;
      this.shw=false;
    }

    togg(){
      this.tog=!this.tog;
    }

    toggleDisplay(){
      this.shw=false;
      this.isShw=true;
      this.isShow=true;
    }
    toggleReg(){
      this.isShow=false;
      this.isShw=true;
      this.shw=true;
    }

    toggleother(){
      this.isShw=true;
      this.isShow=false;
      this.shw=false;
    }


}
