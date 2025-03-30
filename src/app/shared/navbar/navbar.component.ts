import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: false
})
export class NavbarComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  salir(){
    sessionStorage.clear()
    this.route.navigate(['sign-in'])
  }

}
