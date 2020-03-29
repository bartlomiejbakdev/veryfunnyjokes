export interface Joke {
  id: number;
  title: string;
  content: string;
  votes: number;
  creator: string;
  created?: string; /*** TODO change to date! */
  modified?: string;
}
