import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

import {User} from "./user.model";
import {ErrorService} from "../errors/error.service";

@Injectable()
export class AuthService {

    testUrl: string = 'http://localhost:3000/';
    herokuUrl: string = 'https://angular2-messages-app.herokuapp.com/';
    awsUrl: string = 'http://sample-env-1.immuypcque.eu-central-1.elasticbeanstalk.com/'
    finalUrl: string = this.herokuUrl;

    constructor(private http: Http, private errorService: ErrorService) {
    }

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.finalUrl + 'user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.finalUrl + 'user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}