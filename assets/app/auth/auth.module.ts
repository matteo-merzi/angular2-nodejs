import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {LogoutComponent} from "./logout.component";
import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";
import {authRouting} from "./auth.routing";

@NgModule({
    declarations: [
        LogoutComponent,
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ],
    providers: []
})
export class AuthModule {
}