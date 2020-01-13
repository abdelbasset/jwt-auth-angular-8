import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomNumberService } from '../../../_services/random-number.service';
import { AuthService } from '../../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.scss']
})
export class RandomNumberComponent implements OnInit {

  randomNumber: Observable<number>;

  constructor(private random: RandomNumberService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.randomNumber = this.random.getRandomNumber();
  }

  logout() {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
  }

}