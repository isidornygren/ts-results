# TS-Result

This is a javascript / typescript implementation of rust's [result type](https://doc.rust-lang.org/std/result/).
It's use is mainly during validation of return values where the return type cannot be infered properly. (although as javascript lacks pattern matching we're missing half of the fun)

So instead of writing:

```typescript
function transformData(data: Data): TransformedData {
  if (!data.name) {
    throw new DataError("Data lacks name");
  }
  if (!data.value) {
    throw new DataError("Data lacks value");
  }
  return transformData(data);
}

let transformedData = data;
try {
  transformedData = transformData(data);
} catch (err) {
  alert(err);
}
return transformedData;
```

You could write:

```typescript
function transformData(data: Data): Result<TransformedData, string> {
  if (!data.name) {
    return new Err("Data lacks name");
  }
  if (!data.value) {
    return new Err("Data lacks value");
  }
  return new Ok(transformData(data));
}

return transformData(data).unwrapOrElse(err => {
  alert(err);
  return data;
});
```

So It's basically just a bunch of functions connected to a return value that may or may not be necessary.

The basic concept is that it forces the programmer to more or less use the resulting values of a function in a neat way. Less so in Javascript as we can't force anyone to do anything, although hiding the values behind a protected access modifier in typescript we have at least some control there.
