import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from "../../../services/shared.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    @ViewChild('f') profileForm: NgForm;

    userId: string;
    user = {};
    username: string;
    msgFlag: boolean;
    message = '';

    constructor(private serviceHandler: UserService, private sharedService: SharedService, private router: Router) {
    }

    ngOnInit() {
        this.user = this.sharedService.user;
    }

    updateProfile() {
        this.user['email'] = this.profileForm.value.email;
        this.user['firstName'] = this.profileForm.value.firstName;
        this.user['lastName'] = this.profileForm.value.lastName;
        this.serviceHandler.updateUser(this.userId, this.user)
            .subscribe(
                (data: any) => {
                    this.msgFlag = true;
                    this.message = 'Successfully updated user';
                },
                (error: any) => {
                    this.msgFlag = true;
                    this.message = 'Failure while updating user';
                }
            );
    }

    logout() {
        this.serviceHandler.logout()
            .subscribe(
                (data: any) => this.router.navigate(['/login'])
            );
    }
}
