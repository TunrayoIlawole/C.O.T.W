import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromApp from '../state/app.state';
import * as AuthActions from '../auth/state/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = 'Countries of the World';
  isAuthenticated: boolean = false;

  private userSub: Subscription

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
    this.userSub = this.store.select('user').pipe(
      map(authState => {
        return authState.user
      })
    ).subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    })
  }

  onLogout(): void {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
