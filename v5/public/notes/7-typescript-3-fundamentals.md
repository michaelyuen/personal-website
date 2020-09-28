---
title: Frontend Masters | TypeScript 3 Fundamentals, v2
description: Note from the course
date: '2020-04-03'
tags:
- code
- frontend-masters
- migrated-from-agenda
- typescript
absolute-note-number: 7
zettel: 7
---



# TypeScript 3 Fundamentals, v2



## Introduction



### What is TypeScript?

A typed, syntactic superset of JavaScript.

- **DOES NOT** mean that every JavaScript program can happily run through the typescript compiler with no errors
- It’s true that if you loosen up the compiler to the more flexible possible mode, a lot of regular JavaScript programs can make it happy
- Compiles to readable JavaScript
- **NO** run-time component
- The Types disappear in a build step
- ==:star: You can almost think about it as a static analysis tool that does a lot of checking on your codebase==



#### Good

- No run-time cost

#### Bad

- Can't type check dynamic things
- **IMPORTANT** to keep in mind things like dynamically fetching data, user input, etc. won't be type checked - at that point it's just a JavaScript program



## 3 Main Parts

1. Language
2. Language Server
   - What is going on with my program at this point?
   - Autocomplete
   - Tooltips
3. Compiler
   - One way to take `.ts` files and emit `.js` files (but I think Babel is often the right choice)



- Works semlessly with Babel 7
  - That is when Babel introduced support for TS files out of the box
- ==**​ :star: IMPORTANT:** Babel does no type checking, it will just discard all type information==
  - Babel should be used side-by-side with the TS compiler
  - But the advancement is needing one piece of tooling that is responsible for creating your `.js` files



## Rationale - Why Add Types?

- To encode constraints and assumptions as part of developer intent
- Catch common mistakes, such as incomplete refactors
- Move some runtime errors to compile time
- Provide your consumers (including you) with a great developer experience



## Flags

This pertains to the CLI for the compiler - `tsc`.



`tsc src/index.ts`

- Produces a bunch of code compliant with old things (IE)

`tsc src/index.ts --target ES2015`

- Has things like Promise

`tsc src/index.ts --target ES2017`

- Has things like async/await
- Contains `export async function addNumber...` which would not work in node because it expects CommonJs module format (module.exports)
  - We can add another flag for this
    - `tsc src/index.ts --target ES2017 --module commonjs`

`tsc src/index.ts --watch`

- Leave tsc watching the files for changes



## Configuring TypeScript

While good to be aware of the CLI usage and various flags, the conventional way to set up an app for TypeScript is to use a configuration file - `tsconfig.json`



### 2 Things to Think About

1. Defining which files are the input
   - `files`
   - `includes`
     - Mike North's preference as it lets you specify globs
2. How are we compiling the files?
   - The compiler options (parallel to flags)
     - `module`, `target`, etc.



### Common Compiler Options

`"outDir": "lib"`

- Put it in a different directory (lib)
- Good for libraries

`"declaration": true`

- `index.d.ts`
- Type declaration file - layer on top of the JS

`"sourceMap": true`

`"jsx": true`

- Transform jsx - for React

`"strict": true`

- Ultimately you want to end up here
- Turns on many other strict options, which is convenient



## Variable Declarations

> I err on the side of providing type information in a few specific places. Variables with initializers is **not** one of those places, because TypeScript can **always** infer at that location.



Variables with initializers:

`const foo = 1` - TS knows this is a number



> Provide an explicit contract between two things

- [ ] Go back and find more context about this



## Arrays and Tuples

> Tuple is a fancy word, but it just means array. It's an array of a fixed length that comes in a convention



```typescript
// Can only be of length 4
// Types must be as declared
let bb: [number, string, string, number] = [
	123,
	"Fake Street",
	"Nowhere, USA",
	10110
]
```

> Tuples are a great way to return multiple values from a function



## Object Types and Interfaces

> Object types looks kind of like object values, except instead of `key: value` it's `key: type`



`const obj: { name: string; age: number; } = { name: 'michael', age: 31 };`

> Prettier adds the semicolon, which I like because it's one more piece of information that helps me understand it's a type and not a value



## Intersection and Union Types

Union is like **OR**

```typescript
type HasEmail = {
	name: string;
  email: string;
};

type HasPhoneNumber = {
	name: string;
  phoneNumber: number;
};

let contactInfo: HasEmail | HasPhoneNumber = {};
```



==​ :star: Can only access properties common to both/all types==

So, `contactInfo.name` is valid. `contatInfo.email` is not, because it's not on the `HasPhoneNumber` type.



Intersection is like **AND**

```typescript
type HasEmail = {
	name: string;
  email: string;
};

type HasPhoneNumber = {
	name: string;
  phoneNumber: number;
};

let contactInfo: HasEmail & HasPhoneNumber = {};
```



==:star: Can access ALL properties because they **must** all exist to fulfill union==





## Type Systems and Object Shapes

Stated another way, "Can we regard value `x` as a type of `blah`?"

**Nominal Type Systems:** answer this question based on whether `x` is an instance of a class/type named `blah`

**Structural Type Systems:** only care about the **shape** of an object

- TypeScript is a structural type system



### Wider vs Narrower

The verbiage used to describe relative differences in the range of a type's allowable values.

`any` & `unknown` are the most **wide**.

`never` is the most **narrow**.



## Functions

```typescript
function sendEmail(to: HasEmail): { recipient: string; body: string; } {
  return { recipient: '', body: '' };
}
```

Colon and object notation after function is the type annotation for a return value.



> :star: This is a place where I tend to **ALWAYS** use type annotations, because I want to define the contract this function has with other parts of my program. TS can infer return types pretty well but it’s very easy to slip up and unintentionally change things.



```typescript
function getNameParts(contact: { name: string }) {}
```

:star: This says contact can be anything with a property **name**. Typically may operate on things that have way more than the property **name**, but I’m being conservative in terms of allowing any object that has a property name.



> :star: When I’m typing function arguments, I kind of want to state the minimum thing I need to avoid over-contraining the function. This may be useful elsewhere and I don’t want to artificially impose additional requirements on what these arguments must be.



### Multiple Function Signatures - Function Overloading

```typescript
// Overload Signatures
// The specific valid ways to access the function
function contactPeople(method: "email", ...people: HasEmail[]) {}
function contactPeople(method: "phone", ...people: HasPhoneNumber[]) {}

// Function Implemenation
function contactPeople(method: "email" | "phone", ...people: (HasEmail | HasPhoneNumber)[]) {}


// email works
contactPeople(“email”, { name: “foo”, email: “” });
// phone works
contactPeople(“phone”, { name: “foo”, phone: 12345678 });
// mixing does not work
contactPeople(“email”, { name: “foo”, phone: 12345678 });
```



## Type Aliases & Extends

Like a variable for types. ==Does NOT work for interfaces==

`type StringOrNumber = string | number`



```typescript
// This is the only time you'll see a type on the RHS of assignment
type HasName = { name: string };
```



Interfaces can extend from other interfaces. (extend from like things)

```typescript
interface HasInternationalPhoneNumber extends HasPhoneNumber {
  countryCode: string;
}
```



### One clear difference between Type & Interface

- Type is extremely flexible
  - Can handle primitives
  - Sorted out eagerly
- Interface
  - Can't handle primitives
  - Only objects and subtypes (Array, Function) - things that have prototypes
  - Sorted out lazily





## Dictionary Objects & Index Signatures

```typescript
// Object with key that is a string
// Value will either be undefined or match the object shape
interface PhoneNumberDict {
  [numberName: string]: undefined | { areaCode: number, number: number };
}

// Conditionals can be used to narrow types
const phoneBook: PhoneNumberDict = {
  michael: {
    areaCode: 407,
    number: 7125571
	}
}

// TS be like - is michael's value undefined or nah?
phoneBook.michael

if (typeof phoneBook.michael !== 'undefined') {
  // Now TS knows it's not undefined
  phoneBook.michael
}
```

- [ ] find better example for conditionals narrowing types



## Combining Interfaces

We can use index signatures in combination with other types

Index signatures used in combination may be used as a fallback, such as “here is an object that will always have these props, but there may be extra stuff”, and the index signature covers the extra stuff.

- [ ] look this up again for more detail



## Type Tests

Types can (and should) have tests too.

Lib `dts-lint`​ :star:



## Classes

- [x] Fields
- [x] Access modifier keywords
  - public - everyone
  - private - me and subclasses
  - protected - only me



```typescript
// Classes can implement interfaces
class Contact implements HasEmail {
  email: string;
  name: string;
  
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}
```

This is a little verbose. We have to specity the words "name" and "email" multiple times. TS has a shortcut - parameter properties.



```typescript
// With access modifiers
class Contact implements HasEmail {
  constructor(public name: string, public email: string) {
  	// nothing needed
  }
}
```



## Definite Assignment & Lazy Initialization

- [ ] Fill this in



## Converting to TypeScript



### 3 Steps for Success

1. Compile in "loose mode"
   - Start with tests passing
   - Rename all js to ts, allowing implicit any
   - Fix only things that are not type checking , or are compilation errors
   - Be careful to avoid changing behavior
   - Get tests passing again
2. Explicit any
   - Start with tests passing
   - Ban implicit any (tsconfig)
   - Where possible, provide a specific and appropriate type
     - Import types for dependencies from DefinitelyTyped
     - Otherwise explicit any
   - Get tests passing again
3. Squash explicit any, enable strict mode
   - Incrementally, in small chunks
   - Enable strict mode
     - strictNullChecks
     - strict
     - strictFunctionTypes
     - strictBindCallApply
   - Replace explicit any with more appropriate types
   - Try really hard to avoid unsafe casts



### What Not To Do

- Make functional changes at the same time
- Attempt this with low test coverage
- Let the perfect be the enemy of the good
- Forget to add tests for your types
- (For libraries) publist types for consumer use while they're still in a "weak" state



## Generics

Parameterized types.

- Similar mental model to functions and how their parameters promote reuse



```typescript
// Param determines the value of x
function wrappedValue(x) {
  return {
  	value: x;
  }
}

// Type param determines the type of x
interface WrappedValue<x> {
	value: x;
}

// Passed in "string[]", it could be any type
let val: WrappedValue<string[]> = { value: [] };
```



These params can be named anything, but a common convention is to use capital letters starting with `T`, such as:

Also notice you can have default values for the type. So you can use it without providing a type param.

```typescript
interface FilterFunction<T = any> {
	(val: T): boolean;
}
```





### Constraints & Scope

Type parameters can have constraints.

```typescript
function arrayToDict<T extends { id: string }>(array: T[]) {}
```

`T`  **must** extend, or be assignable, to an object with a property `id` that is of type string.

Useful to declare a minimum value of what `T` must be.



Like function args, type parameters are associated with scopes.



### Use Cases

When to use generics?

- Think “relational”. Defining a relationship of “I accept this” and return “that”

  

> Sometimes when people have the issue of types beginning to explode in complexity - often that comes from overzealous use of generics

- One thing that a lot of content gets wrong (blog posts, etc.)



## Top Types

"Top types" are types that can hold any value. TS has two of these.

1. any
2. unknown

The difference is apparent when trying to access stuff off them.





## Type Guards

```typescript
// The true or false value returned determines if it should be regarded as HasEmail
function isHasEmail(x: any): x is HasEmail {
	return typeof x.name === "string" && typeof x.email === "string";
}

// myUnknown is unknown
if (isHasEmail(myUnknown) {
	// now it is HasEmail
	console.log(myUnknown.name, myUnknown.email);
}

```



### Mike's Most Common Guard

```typescript
function isDefined<T>(arg: T | undefined): arg is T {
	return typeof arg !== "undefined";
}
```

