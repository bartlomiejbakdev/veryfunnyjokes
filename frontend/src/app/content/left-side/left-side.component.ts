import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {Joke} from '../../core/interfaces/joke';
import {CountTheVotesService} from '../../core/services/count-the-votes.service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {


  constructor(public httpService: HttpService, private countTheVotesService: CountTheVotesService) {
  }

  ngOnInit(): void {
  }

  funny(id) {
    this.countTheVotesService.funny(id);
  }

  notFunny(id) {
    this.countTheVotesService.notFunny(id);
  }


}
