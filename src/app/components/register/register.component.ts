import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    regForm: FormGroup;
    post: any;
    description: string = '';
    fname: string = '';
    lname: string = '';
    username: string = '';
    password: string = '';
    answer: string = '';

    constructor(private fb: FormBuilder) {
        this.regForm = fb.group({
            'username': [null, Validators.required],
            'fname': [null, Validators.required],
            'lname': [null, Validators.required],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(24)])],
            'confirmpassword': [null, Validators.required],
            'answer': [null, Validators.required],
            'validate': ''
        })
    }

    addPost(post) {
        this.username = post.username;
        this.fname = post.fname;
        this.lname = post.lname;
        this.password = post.password;
        this.answer = post.answer;
    }

    ngOnInit() {
    }

}
