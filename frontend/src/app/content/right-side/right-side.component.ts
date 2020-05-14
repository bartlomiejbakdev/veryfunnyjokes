import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {CountTheVotesService} from '../../core/services/count-the-votes.service';
import {Joke} from '../../core/interfaces/joke';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  jokes: Array<Joke>;
  bestJokes: Array<Joke>;
  worstJokes: Array<Joke>;

  constructor(private countTheVotesService: CountTheVotesService) {
  }

  ngOnInit(): void {
    this.countTheVotesService.getAllJokes().subscribe(data => {
      this.jokes = data;
      this.bestJokes = [];
      this.jokes.forEach(val => this.bestJokes.push(Object.assign({}, val)));
      console.log(this.bestJokes);
      this.bestJokes = this.bestJokes.sort((n1, n2) => {
        if (n1.upVotes < n2.upVotes) {
          return 1;
        }

        if (n1.upVotes > n2.upVotes) {
          return -1;
        }

        return 0;
      });
      this.worstJokes = [];
      this.jokes.forEach(val => this.worstJokes.push(Object.assign({}, val)));
      console.log(this.worstJokes);
      this.worstJokes = this.worstJokes.sort((n1, n2) => {
        if (n1.downVotes < n2.downVotes) {
          return 1;
        }

        if (n1.downVotes > n2.downVotes) {
          return -1;
        }

        return 0;
      });
    });

  }

}
