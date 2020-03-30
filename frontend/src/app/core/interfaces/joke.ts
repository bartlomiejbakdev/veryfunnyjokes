export interface Joke {
  id: number;
  title: string;
  content: string;
  upVotes: number;
  downVotes: number;
  creator: string;
  created?: string; /*** TODO change to date! */
  modified?: string;
}
