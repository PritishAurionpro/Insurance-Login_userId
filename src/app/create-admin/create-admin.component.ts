import { Component } from '@angular/core';
import { JwtInterceptor } from '../jwt.interceptor';
import { DataServiceService } from '../services/data-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'
import { Token } from '@angular/compiler';



@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
}
