import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable, Subject} from 'rxjs';
import {Joke} from '../interfaces/joke';

@Injectable({
  providedIn: 'root'
})
export class CountTheVotesService {

  private joke = new Subject<Array<Joke>>();

  constructor(private httpService: HttpService) {
  }

  funny(id) {
    this.httpService.listJokes[id].upVotes = this.httpService.listJokes[id].upVotes + 1;
    this.joke.next(this.httpService.listJokes);
  }

  notFunny(id) {
    this.httpService.listJokes[id].downVotes = this.httpService.listJokes[id].downVotes + 1;
    this.joke.next(this.httpService.listJokes);
  }

  getAllJokes(): Observable<Array<Joke>>{
    return this.joke.asObservable();
  }

}
