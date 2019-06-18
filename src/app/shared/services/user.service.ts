import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RepositoryService {
  public UserLogin(user: any): Observable <any> {
   return super.postData('Login/Login', user);
  }
}
