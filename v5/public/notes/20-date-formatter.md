---
title: Date Formatter
date: '2020-10-17'
tags:
- date
- formatter
- formatting
- javascript
- js
absolute-note-number: 
zettel: 10
---



## Goal



### Given a UTC timestamp

`2020-10-17T17:37:00Z`





I want a function, `getTimestamp` to support the following use cases:



## 2 Types of Formatters

1. operate on timestamp
2. operate on *difference* in time



## Use Case 1



### I want it formatted based on various criteria (conditions)

Compared to **"now"**...

- If the difference is less than 1 minute, the UI should display:
  - `a few seconds ago`
- If the difference is 1 minute exactly
  - `1 minute ago`
- If the difference is less than 1 hour
  - `X minutes ago`
- If the difference is less than 1 day
  - `3:45 PM EDT`
- If the difference is greater than or equal to 1 day
  - `October 17th, 20`



## Use Case 2

I want to format the timestamp as **just** `3:45 PM EDT`



## Use Case 3

I want to be able to format as

- If under 1 hours

` Cheer in X minutes`

or

`Cheer in X hours`





---



## Tokens



| Property | Token |
| -------- | ----- |
| Years    | y     |
| Months   | M     |
| Days     | d     |
| Hours    | h     |
| Minutes  | m     |
| Seconds  | s     |



## Arguments

| Name     | Type     | Description            |
| -------- | -------- | ---------------------- |
| duration | Duration | the duration to format |
| format   | string   | the string of tokens   |



## Exceptions

| Type       | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| TypeError  | Parameter `duration` is required.                            |
| TypeError  | Parameter `duration` is required.                            |
| RangeError | format string contains an unescaped latin alphabet character |

