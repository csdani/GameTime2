import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar-login',
    templateUrl: './navbar-login.component.html',
    styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent {
    private isLoggedIn: boolean = false;

    constructor(
        private router: Router
    ) { }

    private toggleLoginStatus() {
        this.isLoggedIn = !this.isLoggedIn;
    }

    public getIsLoggedIn() {
        return this.isLoggedIn;
    }

    public redirectToLogin() {
        console.log('redirectToLogin')
        this.router.navigate(['/login']);
    }

    public logout() {
        console.log('logout clicked');
    }
}
