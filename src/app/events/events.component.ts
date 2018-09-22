import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
// import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
	posts:any[];
	constructor(private userservice:UserService) { }

	ngOnInit() {
		this.get_posts();
	}
	get_posts(){
		this.userservice.get_events('posts').subscribe(data=>{
			this.posts=data;
			// console.log(this.posts);
		});
	}

}
