import { Err, Ok, Result, ResultError } from ".";

describe("ts-results", () => {
  type ThisResult = Result<{ text: string }, string>;

  it("isOk and isErr should typeguard correctly", () => {
    const result = (new Ok({
      text: "hello"
    }) as unknown) as ThisResult;
    // tslint:disable-next-line:no-empty
    const okTypeGuard = <A, B>(_: Ok<A, B>) => {};
    // tslint:disable-next-line:no-empty
    const errTypeGuard = <A, B>(_: Err<A, B>) => {};

    if (result.isOk()) {
      // result should be infered to an ok here
      okTypeGuard(result);
    } else {
      // result should be infered to an error here
      errTypeGuard(result);
    }

    if (result.isErr()) {
      // result should be infered to an ok here
      errTypeGuard(result);
    } else {
      // result should be infered to an error here
      okTypeGuard(result);
    }
  });

  describe("Ok", () => {
    const okValue = {
      text: "hello"
    };
    const success = (new Ok(okValue) as unknown) as ThisResult;

    it("isOk should evaluate to true", () => {
      expect(success.isOk()).toEqual(true);
    });

    it("isErr should evaluate to false", () => {
      expect(success.isErr()).toEqual(false);
    });

    it("expect should return the value of an Ok", () => {
      expect(success.expect("Error")).toEqual(okValue);
    });

    it("mapErr should return itself if result is Ok", () => {
      expect(success.mapErr((val: string) => new Err(666))).toEqual(success);
    });

    it("and should return res for an Ok value", () => {
      const result = new Ok<{ value: string }, string>({
        value: "new"
      });
      expect(success.and(result)).toEqual(result);
    });

    it("andThen should return the operated value of an Ok value", () => {
      expect(success.andThen(val => new Ok(val.text))).toEqual(new Ok("hello"));
    });

    it("or should return itself if result is Ok", () => {
      expect(success.or(new Ok({ text: "something else" }))).toEqual(success);
    });

    it("orElse should return itself if result is Ok", () => {
      expect(success.orElse(_ => new Ok({ text: "something else" }))).toEqual(
        success
      );
    });

    it("unwrapOr should return the value of an Ok", () => {
      expect(success.unwrapOr({ text: "default value" })).toEqual(okValue);
    });

    it("unwrapOrElse should return the value of an Ok", () => {
      expect(
        success.unwrapOrElse(() => ({
          text: "default value"
        }))
      ).toEqual(okValue);
    });

    it("unwrap should return the value of an Ok", () => {
      expect(success.unwrap()).toEqual(okValue);
    });

    it("unwrapErr should throw a new error with the value", () => {
      expect(() => success.unwrapErr()).toThrow(new ResultError(`${okValue}`));
    });

    it("expectErr should throw a new error with a message and the value", () => {
      expect(() => success.expectErr("Was a success")).toThrow(
        new ResultError(`Was a success:${okValue}`)
      );
    });

    it("toPromise should resolve a promise", () => {
      expect(success.toPromise()).resolves.toEqual({ text: "hello" });
    });
  });
  describe("Err", () => {
    const error = (new Err("error") as unknown) as ThisResult;

    it("isOk should evaluate to false", () => {
      expect(error.isOk()).toEqual(false);
    });

    it("isErr should evaluate to true", () => {
      expect(error.isErr()).toEqual(true);
    });

    it("expect should throw the error message passed in", () => {
      expect(() => error.expect("Should throw")).toThrow("Should throw");
    });

    it("mapErr should map the error to a given error", () => {
      expect(error.mapErr(str => `${str}_new`)).toEqual({ value: "error_new" });
    });

    it("and should return original error object", () => {
      expect(error.and(new Err("new_error"))).toEqual(error);
    });

    it("andThen should return original error object", () => {
      expect(error.andThen(val => new Err("new_error"))).toEqual(error);
    });

    it("or should return res if result is an error", () => {
      const newError = new Err<{ text: string }, string>("new_error");
      expect(error.or(newError)).toEqual(newError);
    });

    it("orElse should return result of res if result is an error", () => {
      expect(error.orElse(str => new Err(`${str}_new`))).toEqual(
        new Err("error_new")
      );
    });

    it("unwrapOr should return res", () => {
      const newOk = { text: "default value" };
      expect(error.unwrapOr({ text: "default value" })).toEqual(newOk);
    });

    it("unwrapOrElse should return result of op", () => {
      expect(
        error.unwrapOrElse(err => ({
          text: err
        }))
      ).toEqual({
        text: "error"
      });
    });

    it("unwrap should throw the error", () => {
      expect(() => error.unwrap()).toThrow(new ResultError("error"));
    });

    it("unwrapErr should yield the result of the error", () => {
      expect(error.unwrapErr()).toEqual("error");
    });

    it("expectErr should yield the result of the error", () => {
      expect(error.expectErr("unreachable")).toEqual("error");
    });

    it("toPromise should reject a promise", () => {
      expect(error.toPromise()).rejects.toEqual("error");
    });
  });
});
