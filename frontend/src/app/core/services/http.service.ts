import {Injectable} from '@angular/core';
import {Joke} from '../interfaces/joke';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public listJokes: Array<Joke> = [
    {
      id: 0,
      title: 'MOVING FAST',
      content: 'Q: What did the snail say as he rode along on the turtle’s back?' + '\n' + 'A: Wheeee!',
      upVotes: 0,
      downVotes: 0,
      creator: 'John',
      created: new Date().toDateString(),
      modified: new Date().toDateString()
    },
    {
      id: 1,
      title: 'TURTLE RECALL',
      content: 'An elephant drinking from a stream spots a tortoise lounging on the shore. He grabs it with his ' +
        'trunk and flings it into the jungle. A passing zebra asks, “Why…',
      upVotes: 0,
      downVotes: 0,
      creator: 'Laura',
      created: new Date().toDateString(),
      modified: new Date().toDateString()
    },
    {
      id: 2,
      title: 'LAZY KANGAROO',
      content: 'Q: What do you call a lazy baby kangaroo?\n' + '\n' + 'A: A pouch potato.',
      upVotes: 0,
      downVotes: 0,
      creator: 'Jake',
      created: new Date().toDateString(),
      modified: new Date().toDateString()
    }
  ];

  constructor() {
  }
}
