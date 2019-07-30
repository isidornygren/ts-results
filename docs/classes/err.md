> **[ts-results](../README.md)**

# Class: Err <**T, E**>

## Type parameters

▪ **T**

▪ **E**

## Hierarchy

* [ResultValue](resultvalue.md)‹*`T`*, *`E`*›

  * **Err**

## Index

### Constructors

* [constructor](err.md#constructor)

### Properties

* [value](err.md#protected-value)

### Methods

* [and](err.md#and)
* [andThen](err.md#andthen)
* [expect](err.md#expect)
* [expectErr](err.md#expecterr)
* [isErr](err.md#iserr)
* [isOk](err.md#isok)
* [mapErr](err.md#maperr)
* [or](err.md#or)
* [orElse](err.md#orelse)
* [toPromise](err.md#topromise)
* [unwrap](err.md#unwrap)
* [unwrapErr](err.md#unwraperr)
* [unwrapOr](err.md#unwrapor)
* [unwrapOrElse](err.md#unwraporelse)

## Constructors

###  constructor

\+ **new Err**(`value`: `E`): *[Err](err.md)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | `E` |

**Returns:** *[Err](err.md)*

## Properties

### `Protected` value

• **value**: *`E`*

*Overrides [ResultValue](resultvalue.md).[value](resultvalue.md#protected-abstract-value)*

Contains the error value.

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

▸ **expect**(`message`: string): *void*

*Overrides [ResultValue](resultvalue.md).[expect](resultvalue.md#protected-abstract-expect)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | string |

**Returns:** *void*

___

###  expectErr

▸ **expectErr**(): *`E`*

*Overrides [ResultValue](resultvalue.md).[expectErr](resultvalue.md#protected-abstract-expecterr)*

**Returns:** *`E`*

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

▸ **mapErr**<**F**>(`op`: function): *[Err](err.md)‹*`T`*, *`F`*› | [Ok](ok.md)‹*`T`*, *`F`*›*

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

**Returns:** *[Err](err.md)‹*`T`*, *`F`*› | [Ok](ok.md)‹*`T`*, *`F`*›*

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

▸ (`val`: `E`): *[Result](../README.md#result)‹*`T`*, *`F`*›*

**Parameters:**

Name | Type |
------ | ------ |
`val` | `E` |

**Returns:** *[Ok](ok.md)‹*`T`*, *`F`*› | [Err](err.md)‹*`T`*, *`F`*›*

___

###  toPromise

▸ **toPromise**(): *`Promise<never>`*

*Overrides [ResultValue](resultvalue.md).[toPromise](resultvalue.md#protected-abstract-topromise)*

**Returns:** *`Promise<never>`*

___

###  unwrap

▸ **unwrap**(): *void*

*Overrides [ResultValue](resultvalue.md).[unwrap](resultvalue.md#protected-abstract-unwrap)*

**Returns:** *void*

___

###  unwrapErr

▸ **unwrapErr**(): *`E`*

*Overrides [ResultValue](resultvalue.md).[unwrapErr](resultvalue.md#protected-abstract-unwraperr)*

**Returns:** *`E`*

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