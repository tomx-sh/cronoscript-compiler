# Introduction
Welcome to the CronoScript compiler repository! This project is used to design **CronoScript**, a new _Domain Specific Language (DSL)_ for generating dynamic plannings, particularly useful for project management.

CronoScript is used in the [Cronodile application](https://www.cronodile.com) to generate plannings representations from text.

This project is a work in progress. The language may drastically change in the future, and a lot of features are still to come.

# Requirements
- [pnpm](https://pnpm.io/) (or npm)
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/) (v4 or higher)
- [ANTLR Dev tools](https://www.antlr.org/) (v4 or higher)
- [Java](https://www.java.com/) (v8 or higher)

Running `pnpm install` will install all the dependencies. The main dependencies are:
- [antlr4ts](https://www.npmjs.com/package/antlr4ts)
- [antlr4ts-cli](https://www.npmjs.com/package/antlr4ts-cli)

# CronoScript
## What is it?
The idea behind CronoScript is to be able to generate plannings from a simple text file. All the information is contained in the text file, and no other external configuration is needed. That means you can easily store and share your plannings. And as CronoScript aims to become an open standard, you are not tied to a specific application.

 The language is designed to be as simple as possible, while still being powerful enough to generate complex and dynamic plannings.

## Main concepts

CronoScript is based on 2 simple concepts:

1. **Date**: A date is a point in time. It can be a specific date, or a relative date (e.g. "tomorrow".)
2. **Group**: A group is a collection of dates or other groups. It can be used to organize things, give them a name, and create simple or complex structures.

The most useful structures are:
- **Events**: A group containing a single date,
- **Tasks**: A group of 2 dates, linked together,
- **Delayed dates**: A special group of 2 dates, that can be used as a date in a task or event.








## Dates
Dates are always written between single quotes:
```CronoScript
'01/01/2023'
```
Dates can be written in different formats:
```CronoScript
'01/01/2023'
'01/01/2023 12:00'
'01/01/2023 12:00:00' // You can be as precise as seconds
'01 january 2023'
'01 january 23'
'01 jan 23'
'monday 01 january 2023'
'01 jan' // The year is assumed to be the current year
'tomorrow'
'next week'
// And more...
```
> CronoScript will read what you write between single quotes and try to parse it as a date. If it fails, it will throw an error.









## Events
With CronoScript, you can group things by writing them inside brackets.

The simplest thing you can do is group a single date, with nothing else:
```CronoScript
['09/09/2023']
```
Let's call this basic structure an *event*.

Like for any group, you can give it a name by writing it next to it inside double quotes.

```CronoScript
['09/09/2023'] "Tom's birthday"
```
You can also write the name before:
```CronoScript
"Tom's birthday" ['09/09/2023']
```






## Tasks

You can group 2 dates together, separated by a comma:
```CronoScript
['01/01/2023', '02/02/2023'] "A group of 2 dates"
```
You can also group 2 events together:
```CronoScript
"Write an essay" [
    ['01/01/2023'] "Start writing",
    ['02/02/2023'] "Finish writing"
]
```
> 💡 CronoScript doesn't care about whitespaces, line breaks, or indentation. You can write your code however you like to make it more readable! And remember, you can place a name before or after the group.

But as they are separated by a comma, they are not really linked together.

You can link thinks together by using the `->` operator:
```CronoScript
['01/01/2023' -> '02/02/2023'] "A group of 2 dates, linked together"
```
> 💡 See how we replaced the `,` with the `->` ?


A task is just a group of 2 dates or 2 events, but instead of using the `,` to separate them, you use the `->` operator to show that they are linked together.





## Groups

More generally, you can group anything, including other groups.

Don't forget to separate the elements with a comma, or a `->` if you want to show that they are linked together.

Let's see examples:

A group of 3 dates:
```CronoScript
['01/01/2023', '09/09/2023', '25/12/2023']
```
A group of 2 events:
```CronoScript
[['01/01/2023'] "New year's day", ['09/09/2023'] "Tom's birthday"]
``````

A group of 2 events with a name:
```CronoScript
"Birthdays" [
    ['01/01/2023'] "Emma's birthday",
    ['09/09/2023'] "Tom's birthday"
]
```

A group made of an event, a task, and an other group:
```CronoScript
"Car project" [

    ['01/01/2023'] "Buy the car",

    ['02/01/2023' -> '03/01/2023'] "Bring it home",

    "Fix the car" [
        ['04/01/2023'] "Buy the tools",
        ['05/01/2023' -> '15/05/2023'] "Use the tools"
    ]
]
```


## Timelines
The root groups (the ones that are not contained into other groups) are called timelines. Their name is displayed on the left of the planning.

```CronoScript
"Timeline 1" [
    '01/01/2023' "Event 1",
    "Group A" [...],
    "Group B" [...]
]

"Timeline 2" [
    '01/01/2023' "Event 5",
    "Group C" [...],
]
```

## Variables
You can define variables to store values and reuse them later. Almost everything can be stored in a variable. To define a variable, use the `let` keyword:

```CronoScript
let myText = "Hello world!"
let myDate = '01/01/2023'
let myTask = ['01/01/2023' -> '02/02/2023'] "Write an essay"
```
You can specify the type of the variable by using the `:` symbol and the appropriate keyword:
```CronoScript
let myText: string = "Hello world!"
```
> 💡 Most of the time, CronoScript can infer the type of the variable, so you don't need to specify it.

Let's see the different types of variables you can use.

### `strings`
To store a text label, tu use as a name for an event, a task or a group:
```CronoScript
let description: string = "Car project"
```

### `date`
To store a date:
```CronoScript
date birthday: date = '09/09/2023'
date lunch: date = '01/01/2023 12:00'
date rendezvous: date = 'monday 5 january 2023 15:00'
```
> 💡 Remember, dates are always written between single quotes!


### `duration`
To store a duration, e.g. `2 days`, use a `_` character between the number and the unit:
```CronoScript
let taskDuration: duration = 2_days
let projectDuration = 6_months
```
If you need to compose durations, use the `+` operator:
```CronoScript
let taskDuration = 2_days + 4_hours
```

### `group`
You can store a whole group in a variable:
```CronoScript
let carProject: group = [
    '01/01/2023' "Buy the car",
    '02/01/2023' "Bring it home",
    "Fix the car" [
        '04/01/2023' "Buy the tools",
        '05/01/2023' "Use the tools"
    ]
] "Car project"
```
Events and tasks can be stored in a `group` variable. But if you want to be ore restrictive, you can use the `event` and `task` types instead.



## Date operations


### Addition and substraction

You can add a duration to a date to get a new date. Simply use the `+` operator:
```CronoScript
'01/01/2023' + 2_days
// Is equivalent to
'03/01/2023'
```
This can be used for events or tasks:
```CronoScript
['01/02/2023' -> ('01/02/2023' + 2_days)] "Write an essay"
```
> 💡 Use parenthesis to correctly compose your operations.

When the date is the same before and after the `->` operator, you can omit the second date for a cleaner syntax. The operator becomes `->+`:
```CronoScript
['01/02/2023' ->+ 2_days] "Write an essay"
```
You can also do substractions using the `-` operator.

Example for an event:
```CronoScript
['01/01/2023' - 2_days] "Expedited meeting"
```
Example for a task:
```CronoScript
['01/01/2023' -> '15/02/2023' - 2_days] "Shortened project"
```

### Multiplication and division
You can multiply or divide a duration by a number to get a new duration. Simply use the `*` or `/` operator:
```CronoScript
2_days * 2
// Is equivalent to
4_days
```




### Delay
You may want to communicate a delayed date, while keeping track of the original date.

A delayed date is a group of 2 dates, separated by the `...` operator:

```CronoScript
['02/01/2023'...'03/01/2023']
```
> 💡 You can also give names to delays!


As we saw before, a date can also be an addition of a duration to a date. So the previous delayed date can be of form:
```CronoScript
['02/01/2023'...('02/01/2023' + 1_day)] "Delayed event"
```
> 💡 Use parenthesis to correctly compose your operations.

In the example above, the dates before and after the `...` operator are the same. CronoScript has a special shortcut operator: `...+` you can use then:
```CronoScript
['02/01/2023'...+ 1_day] "Delayed event"
```
Of course, you can use this with tasks:
```CronoScript
['02/01/2023' -> ('14/01/2023'...+ 1_week)] "Delayed task"
```
Lets see what it looks like with variables:
```CronoScript
let start = '02/01/2023'
let end   = '14/01/2023'
let taskDuration = 1_month
let delay = 1_week

[start -> (end...+ delay)] "Delayed task 1"
[(start...+delay) ->+ taskDuration] "Delayed task 2"
```




## Options
Events, tasks, and timelines, and even the whole document, can have options. Options can be used to add more information to an element, or to change its behavior or appearance.

Options are written after a `#` symbol:
```CronoScript
['01/01/2023'] "Dad's birthday" #color:blue #font-size:20px
```
A list of options is yet to be defined.

## Tags
Tags are used to tag people, places, or anything you want. They are written after a `@` symbol:
```CronoScript
['01/01/2023'] "Dad's birthday" @family
```

## Comments
You can add one-line comments to your code by using the `//` symbol:
```CronoScript
// This is a comment
```
You can also add multi-line comments by using `/*` and `*/`:
```CronoScript
/*
This is a multi-line
comment.
*/
```

# Planned features

* The `->>` and `<->` operators to create dependencies between tasks.