> **[ts-results](../README.md)**

# Class: Ok <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* [ResultValue](resultvalue.md)‹*`T`*, *`E`*›

  * **Ok**

## Index

### Constructors

* [constructor](ok.md#constructor)

### Properties

* [value](ok.md#value)

### Methods

* [and](ok.md#and)
* [andThen](ok.md#andthen)
* [expect](ok.md#expect)
* [expectErr](ok.md#expecterr)
* [isErr](ok.md#iserr)
* [isOk](ok.md#isok)
* [mapErr](ok.md#maperr)
* [or](ok.md#or)
* [orElse](ok.md#orelse)
* [toPromise](ok.md#topromise)
* [unwrap](ok.md#unwrap)
* [unwrapErr](ok.md#unwraperr)
* [unwrapOr](ok.md#unwrapor)
* [unwrapOrElse](ok.md#unwraporelse)

## Constructors

###  constructor

\+ **new Ok**(`value`: `T`): *[Ok](ok.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `T` |

**Returns:** *[Ok](ok.md)*

## Properties

###  value

• **value**: *`T`*

*Overrides [ResultValue](resultvalue.md).[value](resultvalue.md#protected-abstract-value)*

Contains the success value.

## Methods

###  and

▸ **and**<**U**>(`res`: [Result](../README.md#result)‹*`U`*, *`E`*›): *[Ok](ok.md)‹*`U`*, *`E`*› | [Err](err.md)‹*`U`*, *`E`*›*

*Overrides [ResultValue](resultvalue.md).[and](resultvalue.md#protected-abstract-and)*

**Type parameters:**

▪ **U**

**Parameters:**

Name | Type |
------ | ------ |
`res` | [Result](../README.md#result)‹*`U`*, *`E`*› |

**Returns:** *[Ok](ok.md)‹*`U`*, *`E`*› | [Err](err.md)‹*`U`*, *`E`*›*

___

###  andThen

▸ **andThen**<**U**>(`op`: function): *[Ok](ok.md)‹*`U`*, *`E`*› | [Err](err.md)‹*`U`*, *`E`*›*

*Overrides [ResultValue](resultvalue.md).[andThen](resultvalue.md#protected-abstract-andthen)*

**Type parameters:**

▪ **U**

**Parameters:**

▪ **op**: *function*

▸ (`val`: `T`): *[Result](../README.md#result)‹*`U`*, *`E`*›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `T` |

**Returns:** *[Ok](ok.md)‹*`U`*, *`E`*› | [Err](err.md)‹*`U`*, *`E`*›*

___

###  expect

▸ **expect**(): *`T`*

*Overrides [ResultValue](resultvalue.md).[expect](resultvalue.md#protected-abstract-expect)*

**Returns:** *`T`*

___

###  expectErr

▸ **expectErr**(`message`: string): *void*

*Overrides [ResultValue](resultvalue.md).[expectErr](resultvalue.md#protected-abstract-expecterr)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *void*

___

###  isErr

▸ **isErr**(): *boolean*

*Overrides [ResultValue](resultvalue.md).[isErr](resultvalue.md#protected-abstract-iserr)*

**Returns:** *boolean*

___

###  isOk

▸ **isOk**(): *boolean*

*Overrides [ResultValue](resultvalue.md).[isOk](resultvalue.md#protected-abstract-isok)*

**Returns:** *boolean*

___

###  mapErr

▸ **mapErr**<**F**>(`op`: function): *[Ok](ok.md)‹*`T`*, *`F`*› | [Err](err.md)‹*`T`*, *`F`*›*

*Overrides [ResultValue](resultvalue.md).[mapErr](resultvalue.md#protected-abstract-maperr)*

**Type parameters:**

▪ **F**

**Parameters:**

▪ **op**: *function*

▸ (`val`: `E`): *`F`*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `E` |

**Returns:** *[Ok](ok.md)‹*`T`*, *`F`*› | [Err](err.md)‹*`T`*, *`F`*›*

___

###  or

▸ **or**<**F**>(`res`: [Result](../README.md#result)‹*`T`*, *`F`*›): *[Ok](ok.md)‹*`T`*, *`F`*› | [Err](err.md)‹*`T`*, *`F`*›*

*Overrides [ResultValue](resultvalue.md).[or](resultvalue.md#protected-abstract-or)*

**Type parameters:**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`res` | [Result](../README.md#result)‹*`T`*, *`F`*› |

**Returns:** *[Ok](ok.md)‹*`T`*, *`F`*› | [Err](err.md)‹*`T`*, *`F`*›*

___

###  orElse

▸ **orElse**<**F**>(`op`: function): *[Ok](ok.md)‹*`T`*, *`F`*› | [Err](err.md)‹*`T`*, *`F`*›*

*Overrides [ResultValue](resultvalue.md).[orElse](resultvalue.md#protected-abstract-orelse)*

**Type parameters:**

▪ **F**

**Parameters:**

▪ **op**: *function*

▸ (`error`: `E`): *[Result](../README.md#result)‹*`T`*, *`F`*›*

**Parameters:**

Name | Type |
------ | ------ |
`error` | `E` |

**Returns:** *[Ok](ok.md)‹*`T`*, *`F`*› | [Err](err.md)‹*`T`*, *`F`*›*

___

###  toPromise

▸ **toPromise**(): *`Promise<T>`*

*Overrides [ResultValue](resultvalue.md).[toPromise](resultvalue.md#protected-abstract-topromise)*

**Returns:** *`Promise<T>`*

___

###  unwrap

▸ **unwrap**(): *`T`*

*Overrides [ResultValue](resultvalue.md).[unwrap](resultvalue.md#protected-abstract-unwrap)*

**Returns:** *`T`*

___

###  unwrapErr

▸ **unwrapErr**(): *void*

*Overrides [ResultValue](resultvalue.md).[unwrapErr](resultvalue.md#protected-abstract-unwraperr)*

**Returns:** *void*

___

###  unwrapOr

▸ **unwrapOr**(`optB`: `T`): *`T`*

*Overrides [ResultValue](resultvalue.md).[unwrapOr](resultvalue.md#protected-abstract-unwrapor)*

**Parameters:**

Name | Type |
------ | ------ |
`optB` | `T` |

**Returns:** *`T`*

___

###  unwrapOrElse

▸ **unwrapOrElse**(`op`: function): *`T`*

*Overrides [ResultValue](resultvalue.md).[unwrapOrElse](resultvalue.md#protected-abstract-unwraporelse)*

**Parameters:**

▪ **op**: *function*

▸ (`val`: `E`): *`T`*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `E` |

**Returns:** *`T`*