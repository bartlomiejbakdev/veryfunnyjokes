import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../core/services/http.service';
import {Joke} from '../../core/interfaces/joke';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  constructor(public httpService: HttpService) {
  }

  ngOnInit(): void {
  }


}
