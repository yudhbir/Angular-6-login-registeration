import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { FormGroup, FormControl,Validators  } from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	is_disabled:boolean=false;
	is_submitted:boolean=false;
	registerform: FormGroup;   
	first_name: FormControl;
	last_name: FormControl;
	email: FormControl;
	password: FormControl; 
	user:any[];
	constructor(public userservice:UserService){}
  
	ngOnInit() {
		this.createFormControls();
		this.createForm();
	}
	createFormControls(){
		this.first_name= new FormControl('',[
		  Validators.required		  
		]);
		this.last_name= new FormControl('',[
		  Validators.required		  
		]);
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
		this.registerform = new FormGroup({
		  first_name: this.first_name,
		  last_name: this.last_name,
		  email: this.email,
		  password: this.password     
		});
	}
	submit(){
		this.is_submitted=true;
		if(this.registerform.invalid){
			return false;
		}else{
			this.is_disabled=true;
			var user_data=this.registerform.value;
			//console.log(user_data);
			this.userservice.register_user('register',user_data).subscribe(data=>{
					this.user=data;	
					console.log(this.user);
			},
			err=>{console.log(err)}
			);
		}
	}

}
