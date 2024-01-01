type Operator<E, R> = (src: Observable<E>) => Observable<R>;
type EventHandler<E> = (event: E) => void;
type unsubscribe = () => void;

export class Observable<E> {
  constructor(public subscribe: (next: EventHandler<E>) => unsubscribe) {}

  pipe<R>(operator: Operator<E, R>) {
    return operator(this);
  }
}
