> **[ts-results](../README.md)**

# Class: ResultValue <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* **ResultValue**

  * [Err](err.md)

  * [Ok](ok.md)

## Index

### Properties

* [value](resultvalue.md#protected-abstract-value)

### Methods

* [and](resultvalue.md#protected-abstract-and)
* [andThen](resultvalue.md#protected-abstract-andthen)
* [expect](resultvalue.md#protected-abstract-expect)
* [expectErr](resultvalue.md#protected-abstract-expecterr)
* [isErr](resultvalue.md#protected-abstract-iserr)
* [isOk](resultvalue.md#protected-abstract-isok)
* [mapErr](resultvalue.md#protected-abstract-maperr)
* [or](resultvalue.md#protected-abstract-or)
* [orElse](resultvalue.md#protected-abstract-orelse)
* [toPromise](resultvalue.md#protected-abstract-topromise)
* [unwrap](resultvalue.md#protected-abstract-unwrap)
* [unwrapErr](resultvalue.md#protected-abstract-unwraperr)
* [unwrapOr](resultvalue.md#protected-abstract-unwrapor)
* [unwrapOrElse](resultvalue.md#protected-abstract-unwraporelse)

## Properties

### `Protected` `Abstract` value

• **value**: *`T` | `E`*

## Methods

### `Protected` `Abstract` and

▸ **and**<**U**>(`res`: [Result](../README.md#result)‹*`U`*, *`E`*›): *[Result](../README.md#result)‹*`U`*, *`E`*›*

Returns res if the result is [Ok](ok.md), otherwise returns the [Err](err.md) value of the result.

**`examples`** 
```typescript
const x: Result<number, string> = new Ok(2);
const y: Result<string, string> = new Err("late error");
x.and(y) // Err("late error")
```
```typescript
const x: Result<number, string> = new Err("early error");
const y: Result<string, string> = new Ok("foo");
x.and(y) // Err("early error")
```
```typescript
const x: Result<number, string> = new Err("not a 2");
const y: Result<string, string> = new Err("late error");
x.and(y) // Err("not a 2")
```
```typescript
const x: Result<number, string> = new Ok(2);
const y: Result<string, string> = new Ok("different result type");
x.and(y) // Err("different result type")
```

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`res` | [Result](../README.md#result)‹*`U`*, *`E`*› |

**Returns:** *[Result](../README.md#result)‹*`U`*, *`E`*›*

___

### `Protected` `Abstract` andThen

▸ **andThen**<**U**>(`op`: function): *[Result](../README.md#result)‹*`U`*, *`E`*›*

Calls op if the result is [Ok](ok.md), otherwise returns the [Err](err.md) value of self.

This function can be used for control flow based on Result values.

**`examples`** 
```typescript
const sq = (x: number): Result<number, number> => new Ok(x*x);
const err = (x: number): Result<number, number> => new Err(x);
Ok(2).andThen(sq).andThen(sq);   // Ok(16)
Ok(2).andThen(sq).andThen(err);  // Err(4)
Ok(2).andThen(err).andThen(sq);  // Err(2)
Err(3).andThen(3).andThen(3);    // Err(2)
```

**Type parameters:**

▪ **U**

**Parameters:**

▪ **op**: *function*

▸ (`val`: `T`): *[Result](../README.md#result)‹*`U`*, *`E`*›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `T` |

**Returns:** *[Result](../README.md#result)‹*`U`*, *`E`*›*

___

### `Protected` `Abstract` expect

▸ **expect**(`message`: string): *`T` | void*

Unwraps a result, yielding the content of an [Ok](ok.md).

**`throws`** [ResultError](resulterror.md) if the value is an [Err](err.md), with a panic message including the passed message, and the content of [Err](err.md).

**`examples`** 
```typescript
const x: Result<number, string> = new Err("emergency failure");
x.expect("Testing expect"); // throws `Testing expect: emergency failure`
```

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *`T` | void*

___

### `Protected` `Abstract` expectErr

▸ **expectErr**(`message`: string): *`E` | void*

Unwraps a result, yielding the content of an [Err](err.md).

**`throws`** [ResultError](resulterror.md) if the value is an [Ok](ok.md), with a panic message including the passed message, and the content of the [Ok](ok.md).

**`examples`** 
```typescript
const x: Result<number, string> = new Ok(10);
x.expectErr("Testing expectErr"); // throws `Testing expectErr: 10`
```

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *`E` | void*

___

### `Protected` `Abstract` isErr

▸ **isErr**(): *boolean*

Returns true if the result is [Err](err.md).

**`examples`** 
```typescript
const x: Result<number, string> = new Ok(-3);
x.isErr() // false
```
```typescript
const x: Result<number, string> = new Err("Some error message");
x.isErr() // true
```

**Returns:** *boolean*

___

### `Protected` `Abstract` isOk

▸ **isOk**(): *boolean*

Returns true if the result is [Ok](ok.md).

**`examples`** 
```typescript
const x: Result<number, string> = new Ok(-3);
x.isOk() // true
```
```typescript
const x: Result<number, string> = new Err("Some error message");
x.isOk() // false
```

**Returns:** *boolean*

___

### `Protected` `Abstract` mapErr

▸ **mapErr**<**F**>(`op`: function): *[Result](../README.md#result)‹*`T`*, *`F`*›*

Maps a `Result<T, E>` to `Result<T, F>` by applying a function to a contained [Err](err.md) value, leaving an [Ok](ok.md) value untouched.

This function can be used to pass through a successful result while handling an error.

**`examples`** 
```typescript
const stringify = (x: number) => `error code: ${x}`;

const x: Result<number, number> = new Ok(2);
x.mapErr(stringify); // Ok(2);

const y: Result<number, number> = new Err(13);
y.mapErr(stringify); // "error code: 13"
```

**Type parameters:**

▪ **F**

**Parameters:**

▪ **op**: *function*

▸ (`val`: `E`): *`F`*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `E` |

**Returns:** *[Result](../README.md#result)‹*`T`*, *`F`*›*

___

### `Protected` `Abstract` or

▸ **or**<**F**>(`res`: [Result](../README.md#result)‹*`T`*, *`F`*›): *[Result](../README.md#result)‹*`T`*, *`F`*›*

Returns res if the result is [Err](err.md), otherwise returns the [Ok](ok.md) value of self.

**`examples`** 
```typescript
const x: Result<number, string> = Ok(2);
const y: Result<number, string> = Err("late error");
x.or(y); // Ok(2)
```
```typescript
const x: Result<number, string> = Err("early error");
const y: Result<number, string> = Ok(2);
x.or(y); // Ok(2)
```
```typescript
const x: Result<number, string> = Err("not a 2");
const y: Result<number, string> = Err("late error");
x.or(y); // Err("late error")
```
```typescript
const x: Result<number, string> = Ok(2);
const y: Result<number, string> = Ok(100);
x.or(y); // Ok(2)
```

**Type parameters:**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`res` | [Result](../README.md#result)‹*`T`*, *`F`*› |

**Returns:** *[Result](../README.md#result)‹*`T`*, *`F`*›*

___

### `Protected` `Abstract` orElse

▸ **orElse**<**F**>(`op`: function): *[Result](../README.md#result)‹*`T`*, *`F`*›*

Calls `op` if the result is [Err](err.md), otherwise returns the [Ok](ok.md) value of self.

This function can be used for control flow based on result values.

**`examples`** 
```typescript
const sq = (x: number): Result<number, number> => new Ok(x*x);
const err = (x: number): Result<number, number> => new Err(x);
Ok(2).orElse(sq).orElse(sq);     // Ok(2)
Ok(2).orElse(err).orElse(sq);    // Ok(2)
Err(3).orElse(sq).orElse(err);   // Ok(9)
Err(3).orElse(err).orElse(err);  // Err(3)
```

**Type parameters:**

▪ **F**

**Parameters:**

▪ **op**: *function*

▸ (`val`: `E`): *[Result](../README.md#result)‹*`T`*, *`F`*›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `E` |

**Returns:** *[Result](../README.md#result)‹*`T`*, *`F`*›*

___

### `Protected` `Abstract` toPromise

▸ **toPromise**(): *`Promise<T | E>`*

Returns a promise that auto resolves if the value is an [Ok](ok.md) value, if the
result value is an [Err](err.md) it will auto reject the promise.

**`examples`** 
```typescript
const x: Result<number, string> = new Ok(10);
x.toPromise().then(res => {
   console.log(res); // 10
});
```
```typescript
const x: Result<number, string> = new Err("emergency failure");
x.toPromise().then(res => {
   console.log(res); // unreachable
}).catch(err => {
   console.log(err) // Err("emergency failure")
});
```

**Returns:** *`Promise<T | E>`*

___

### `Protected` `Abstract` unwrap

▸ **unwrap**(): *`T` | void*

Unwraps a result, yielding the content of an [Ok](ok.md).

**`throws`** [ResultError](resulterror.md) if the value is an [Err](err.md), with a message provided by the [Err](err.md)'s value.

**`examples`** 
```typescript
const x: Result<number, string> = new Ok(2);
x.unwrap(); // 2
```
```typescript
const x: Result<number, string> = new Err("emergency failure");
x.unwrap() // throws "emergency failure"
```

**Returns:** *`T` | void*

___

### `Protected` `Abstract` unwrapErr

▸ **unwrapErr**(): *`E` | void*

Unwraps a result, yielding the content of an [Err](err.md).

**`throws`** [ResultError](resulterror.md) if the value is an [Ok](ok.md), with a custom panic message provided by the [Ok](ok.md)'s value.

**`examples`** 
```typescript
const x: Result<number, string> = new Ok(2);
x.unwrapErr(); // throws "2"
```
```typescript
const x: Result<number, string> = new Err("emergency failure");
x.unwrapErr(); // "emergency failure"
```

**Returns:** *`E` | void*

___

### `Protected` `Abstract` unwrapOr

▸ **unwrapOr**(`optB`: `T`): *`T`*

Unwraps a result, yielding the content of an [Ok](ok.md). Else, it returns `optb`.

**`examples`** 
```typescript
const optb = 2;
const x: Result<number, string> = new Ok(9);
x.unwrapOr(optb); // 9

const x: Result<number, string> = new Err("error");
x.unwrapOr(optb); // 2
```

**Parameters:**

Name | Type |
------ | ------ |
`optB` | `T` |

**Returns:** *`T`*

___

### `Protected` `Abstract` unwrapOrElse

▸ **unwrapOrElse**(`op`: function): *`T`*

Unwraps a result, yielding the content of an [Ok](ok.md). If the value is an [Err](err.md) then it calls op with its value.

**`examples`** 
```typescript
const count = (x: string): number => x.length;
new Ok(2).unwrapOrElse(count); // 2
new Err("foo").unwrapOrElse(count); // 3
```

**Parameters:**

▪ **op**: *function*

▸ (`val`: `E`): *`T`*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `E` |

**Returns:** *`T`*