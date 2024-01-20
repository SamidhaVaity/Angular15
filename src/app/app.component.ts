import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,AlertModule,BsDropdownModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [FormBuilder,Validators]
})
export class AppComponent {
// Inject FormBuilder service
constructor(public fbobj : FormBuilder)
{
}

MarvellousForm = this.fbobj.group(
  {
    firstname :['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$")] ],
    lastname :['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$")] ],
    phone :['', [Validators.required, Validators.pattern("[0-9 ]{10}")] ],
    email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$")]]
  }
);

}
