import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../state/app.state';
import * as AuthActions from './state/auth.actions';

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private tokenExpirationTimer: any; 

    constructor(private http: HttpClient, private router: Router, private store: Store<fromApp.State>) {
    }

    setLogoutTimer(expirationDuration: number): void {
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new AuthActions.Logout);
        }, expirationDuration);
    }

    clearLogoutTimer(): void {
        if(this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }

}