import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit {

    users: User[];
    selectedUser: User;
    error: any;
    addingUser = false;

    constructor(
        private router: Router,
        private userService: UserService) { }

    getUsers(): void {
        this.userService
            .getUsers()
            .then(users => this.users = users)
            .catch(error => this.error = error);
    }

    addUser(): void {
        this.addingUser = true;
        this.selectedUser = null;
    }

    close(savedUser: User): void {
        this.addingUser = false;
        if (savedUser) { this.getUsers(); }
    }

    deleteUser(user: User, event: any): void {
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(res => {
                this.users = this.users.filter(h => h !== user);
                if (this.selectedUser === user) { this.selectedUser = null; }
            })
            .catch(error => this.error = error);
    }

    ngOnInit(): void {
        this.getUsers();
    }

    onSelect(user: User): void {
        this.selectedUser = user;
        this.addingUser = false;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedUser.id]);
    }

}
