import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	is_disabled:boolean=false;
	loginform: FormGroup;   
	email: FormControl;
	password: FormControl; 
	user:any[];
	constructor(public userservice:UserService){}
  
	ngOnInit() {
		this.createFormControls();
		this.createForm();		
	}
	createFormControls(){	
		this.email= new FormControl('',[
		  Validators.required,
		  Validators.pattern("[^ @]*@[^ @]*")
		]);
		this.password= new FormControl('',[
		  Validators.required,
		  Validators.minLength(8)
		]);
	}
	createForm() { 
		this.loginform = new FormGroup({
		  email: this.email,
		  password: this.password     
		});
	}
	submit(){
		if(this.loginform.invalid){
			return false;
		}else{
			this.is_disabled=true;
			var user_data=this.loginform.value;
			// console.log(user_data);
			this.userservice.login_user('login',user_data).subscribe(data=>{
				//this.user=data;					
				notyalert(data.type,data.msg);
			});
		}
	}
}
