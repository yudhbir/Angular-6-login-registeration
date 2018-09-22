import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,Response} from '@angular/common/http';
import { Observable,throwError } from 'rxjs'; 
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	url:String='https://jsonplaceholder.typicode.com/';
	user_url:String='http://localhost:3000/api/v1/';
	httpOptions = {
				headers: new HttpHeaders({
				'Content-Type':  'application/json',				
			  })
		};
	constructor(private http: HttpClient ) {}
	  get_events(url_event:String): Observable<any[]> {
		return this.http.get<any[]>(this.url+''+url_event);
	  }
	  login_user(loginurl:String,user_data): Observable<any[]> {
		return this.http.post<any[]>(this.user_url+''+loginurl,user_data,this.httpOptions);
	  }
	  register_user(register_url:String,user_data): Observable<any[]> {
		var userdata = JSON.stringify(user_data);
		return this.http.post<any[]>(this.user_url+''+register_url,userdata,this.httpOptions);		
	  }
}
