// tslint:disable:max-classes-per-file
export class ResultError extends Error {}

/**
 * Result is a type that represents either success (Ok) or failure (Err).
 */
export type Result<T, E> = Ok<T, E> | Err<T, E>;

abstract class ResultValue<T, E> {
  protected abstract value: T | E;

  /**
   * Returns true if the result is {@link Ok}.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Ok(-3);
   * x.isOk() // true
   * ```
   * ```typescript
   * const x: Result<number, string> = new Err("Some error message");
   * x.isOk() // false
   * ```
   */
  protected abstract isOk(): this is Ok<T, E>;
  /**
   * Returns true if the result is {@link Err}.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Ok(-3);
   * x.isErr() // false
   * ```
   * ```typescript
   * const x: Result<number, string> = new Err("Some error message");
   * x.isErr() // true
   * ```
   */
  protected abstract isErr(): this is Err<T, E>;
  /**
   * Unwraps a result, yielding the content of an {@link Ok}.
   * @throws {@link ResultError} if the value is an {@link Err}, with a panic message including the passed message, and the content of {@link Err}.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Err("emergency failure");
   * x.expect("Testing expect"); // throws `Testing expect: emergency failure`
   * ```
   */
  protected abstract expect(message: string): T | void;
  /**
   * Maps a `Result<T, E>` to `Result<T, F>` by applying a function to a contained {@link Err} value, leaving an {@link Ok} value untouched.
   *
   * This function can be used to pass through a successful result while handling an error.
   * @examples
   * ```typescript
   * const stringify = (x: number) => `error code: ${x}`;
   *
   * const x: Result<number, number> = new Ok(2);
   * x.mapErr(stringify); // Ok(2);
   *
   * const y: Result<number, number> = new Err(13);
   * y.mapErr(stringify); // "error code: 13"
   * ```
   */
  protected abstract mapErr<F>(op: (val: E) => F): Result<T, F>;
  /**
   * Returns res if the result is {@link Ok}, otherwise returns the {@link Err} value of the result.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Ok(2);
   * const y: Result<string, string> = new Err("late error");
   * x.and(y) // Err("late error")
   * ```
   * ```typescript
   * const x: Result<number, string> = new Err("early error");
   * const y: Result<string, string> = new Ok("foo");
   * x.and(y) // Err("early error")
   * ```
   * ```typescript
   * const x: Result<number, string> = new Err("not a 2");
   * const y: Result<string, string> = new Err("late error");
   * x.and(y) // Err("not a 2")
   * ```
   * ```typescript
   * const x: Result<number, string> = new Ok(2);
   * const y: Result<string, string> = new Ok("different result type");
   * x.and(y) // Err("different result type")
   * ```
   */
  protected abstract and<U>(res: Result<U, E>): Result<U, E>;
  /**
   * Calls op if the result is {@link Ok}, otherwise returns the {@link Err} value of self.
   *
   * This function can be used for control flow based on Result values.
   * @examples
   * ```typescript
   * const sq = (x: number): Result<number, number> => new Ok(x*x);
   * const err = (x: number): Result<number, number> => new Err(x);
   * Ok(2).andThen(sq).andThen(sq);   // Ok(16)
   * Ok(2).andThen(sq).andThen(err);  // Err(4)
   * Ok(2).andThen(err).andThen(sq);  // Err(2)
   * Err(3).andThen(3).andThen(3);    // Err(2)
   * ```
   */
  protected abstract andThen<U>(op: (val: T) => Result<U, E>): Result<U, E>;
  /**
   * Returns res if the result is {@link Err}, otherwise returns the {@link Ok} value of self.
   * @examples
   * ```typescript
   * const x: Result<number, string> = Ok(2);
   * const y: Result<number, string> = Err("late error");
   * x.or(y); // Ok(2)
   * ```
   * ```typescript
   * const x: Result<number, string> = Err("early error");
   * const y: Result<number, string> = Ok(2);
   * x.or(y); // Ok(2)
   * ```
   * ```typescript
   * const x: Result<number, string> = Err("not a 2");
   * const y: Result<number, string> = Err("late error");
   * x.or(y); // Err("late error")
   * ```
   * ```typescript
   * const x: Result<number, string> = Ok(2);
   * const y: Result<number, string> = Ok(100);
   * x.or(y); // Ok(2)
   * ```
   */
  protected abstract or<F>(res: Result<T, F>): Result<T, F>;
  /**
   * Calls `op` if the result is {@link Err}, otherwise returns the {@link Ok} value of self.
   *
   * This function can be used for control flow based on result values.
   * @examples
   * ```typescript
   * const sq = (x: number): Result<number, number> => new Ok(x*x);
   * const err = (x: number): Result<number, number> => new Err(x);
   * Ok(2).orElse(sq).orElse(sq);     // Ok(2)
   * Ok(2).orElse(err).orElse(sq);    // Ok(2)
   * Err(3).orElse(sq).orElse(err);   // Ok(9)
   * Err(3).orElse(err).orElse(err);  // Err(3)
   * ```
   */
  protected abstract orElse<F>(op: (val: E) => Result<T, F>): Result<T, F>;
  /**
   * Unwraps a result, yielding the content of an {@link Ok}. Else, it returns `optb`.
   * @examples
   * ```typescript
   * const optb = 2;
   * const x: Result<number, string> = new Ok(9);
   * x.unwrapOr(optb); // 9
   *
   * const x: Result<number, string> = new Err("error");
   * x.unwrapOr(optb); // 2
   * ```
   */
  protected abstract unwrapOr(optB: T): T;
  /**
   * Unwraps a result, yielding the content of an {@link Ok}. If the value is an {@link Err} then it calls op with its value.
   * @examples
   * ```typescript
   * const count = (x: string): number => x.length;
   * new Ok(2).unwrapOrElse(count); // 2
   * new Err("foo").unwrapOrElse(count); // 3
   * ```
   */
  protected abstract unwrapOrElse(op: (val: E) => T): T;
  /**
   * Unwraps a result, yielding the content of an {@link Ok}.
   * @throws {@link ResultError} if the value is an {@link Err}, with a message provided by the {@link Err}'s value.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Ok(2);
   * x.unwrap(); // 2
   * ```
   * ```typescript
   * const x: Result<number, string> = new Err("emergency failure");
   * x.unwrap() // throws "emergency failure"
   * ```
   */
  protected abstract unwrap(): T | void;
  /**
   * Unwraps a result, yielding the content of an {@link Err}.
   * @throws {@link ResultError} if the value is an {@link Ok}, with a custom panic message provided by the {@link Ok}'s value.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Ok(2);
   * x.unwrapErr(); // throws "2"
   * ```
   * ```typescript
   * const x: Result<number, string> = new Err("emergency failure");
   * x.unwrapErr(); // "emergency failure"
   * ```
   */
  protected abstract unwrapErr(): E | void;
  /**
   * Unwraps a result, yielding the content of an {@link Err}.
   * @throws {@link ResultError} if the value is an {@link Ok}, with a panic message including the passed message, and the content of the {@link Ok}.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Ok(10);
   * x.expectErr("Testing expectErr"); // throws `Testing expectErr: 10`
   * ```
   */
  protected abstract expectErr(message: string): E | void;

  /**
   * Returns a promise that auto resolves if the value is an {@link Ok} value, if the
   * result value is an {@link Err} it will auto reject the promise.
   * @examples
   * ```typescript
   * const x: Result<number, string> = new Ok(10);
   * x.toPromise().then(res => {
   *    console.log(res); // 10
   * });
   * ```
   * ```typescript
   * const x: Result<number, string> = new Err("emergency failure");
   * x.toPromise().then(res => {
   *    console.log(res); // unreachable
   * }).catch(err => {
   *    console.log(err) // Err("emergency failure")
   * });
   * ```
   */
  protected abstract toPromise(): Promise<T | E>;
}

export class Err<T, E> extends ResultValue<T, E> {
  /**
   * Contains the error value.
   */
  protected value: E;

  constructor(value: E) {
    super();
    this.value = value;
  }

  public isOk(): this is Ok<T, E> {
    return false;
  }

  public isErr(): this is Err<T, E> {
    return true;
  }

  public expect(message: string) {
    throw new ResultError(`${message}: ${this.value}`);
  }

  public mapErr<F>(op: (val: E) => F) {
    return (new Err<T, F>(op(this.value)) as unknown) as Result<T, F>;
  }

  public and<U>(res: Result<U, E>) {
    return (this as unknown) as Result<U, E>;
  }

  public andThen<U>(op: (val: T) => Result<U, E>) {
    return (this as unknown) as Result<U, E>;
  }

  public or<F>(res: Result<T, F>) {
    return res;
  }

  public orElse<F>(op: (val: E) => Result<T, F>) {
    return op(this.value);
  }

  public unwrapOr(optB: T) {
    return optB;
  }

  public unwrapOrElse(op: (val: E) => T) {
    return op(this.value);
  }

  public unwrap() {
    throw new ResultError(`${this.value}`);
  }

  public unwrapErr() {
    return this.value;
  }

  public expectErr() {
    return this.value;
  }

  public toPromise() {
    return Promise.reject(this.value);
  }
}

export class Ok<T, E> extends ResultValue<T, E> {
  /**
   * Contains the success value.
   */
  public value: T;

  constructor(value: T) {
    super();
    this.value = value;
  }

  public isOk(): this is Ok<T, E> {
    return true;
  }

  public isErr(): this is Err<T, E> {
    return false;
  }

  public expect() {
    return this.value;
  }

  public mapErr<F>(op: (val: E) => F) {
    return (this as unknown) as Result<T, F>;
  }

  public and<U>(res: Result<U, E>) {
    return res;
  }

  public andThen<U>(op: (val: T) => Result<U, E>) {
    return op(this.value);
  }

  public or<F>(res: Result<T, F>) {
    return (this as unknown) as Result<T, F>;
  }

  public orElse<F>(op: (error: E) => Result<T, F>) {
    return (this as unknown) as Result<T, F>;
  }

  public unwrapOr(optB: T) {
    return this.value;
  }

  public unwrapOrElse(op: (val: E) => T) {
    return this.value;
  }

  public unwrap() {
    return this.value;
  }

  public unwrapErr() {
    throw new ResultError(`${this.value}`);
  }

  public expectErr(message: string) {
    throw new ResultError(`${message}:${this.value}`);
  }

  public toPromise() {
    return Promise.resolve(this.value);
  }
}
