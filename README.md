# CronoScript Compiler
## Introduction
Welcome to the CronoScript compiler repository! This project is used to design **CronoScript**, a new _Domain Specific Language (DSL)_ for generating dynamic plannings, particularly useful for project management.

CronoScript is used in the [Cronodile application](https://www.cronodile.com) to generate plannings representations from text.

This project is a work in progress. The language may drastically change in the future, and a lot of features are still to come.

## Requirements
- [pnpm](https://pnpm.io/) (or npm)
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [TypeScript](https://www.typescriptlang.org/) (v4 or higher)
- [ANTLR Dev tools](https://www.antlr.org/) (v4 or higher)
- [Java](https://www.java.com/) (v8 or higher)

Running `pnpm install` will install all the dependencies. The main dependencies are:
- [antlr4ts](https://www.npmjs.com/package/antlr4ts)
- [antlr4ts-cli](https://www.npmjs.com/package/antlr4ts-cli)

## CronoScript
### What is it?
The idea behind CronoScript is to be able to generate plannings from a simple text file. All the information is contained in the text file, and no other external configuration is needed. That means you can easily store and share your plannings. And as CronoScript aims to become an open standard, you are not tied to a specific application.

 The language is designed to be as simple as possible, while still being powerful enough to generate complex and dynamic plannings.

 ### Main concepts

CronoScript is based on 3 simple concepts:

- **Event**: An event is a point in time. It can be used to represent a milestone, a deadline, or anything that happens at a specific time.
- **Task**: A task is a period of time. It can be used to represent a project, a meeting, or any activity that takes place over a period of time.
- **Timeline**: A timeline is a group of milestones and tasks.

## Events
An event can be describe as simply as a date, written between parenthesis:
```CronoScript
(01/01/2023)
```

If you want to give it a label, you can write it inside quotes:

```CronoScript
(09/09/2023) "Tom's birthday"
```

## Tasks
A task is exactly like an event, but with 2 dates, separated by `>`:

```CronoScript
(06/06/2023 > 07/07/2023) "Vacations"
```

## Timelines
To make a timeline, simply group events and tasks together inside brackets:

```CronoScript
[
    (06/06/2023 > 07/07/2023) "Vacations",
    (09/09/2023) "Tom's birthday"
]
```
> 💡 Don't forget to separate the elements with a comma!

You can also give a title to the timeline by writing it before the elements (don't forget the quotes):

```CronoScript
"Summer" [
    (06/06/2023 > 07/07/2023) "Vacations",
    (09/09/2023) "Tom's birthday"
]
```
> 💡 CronoScript doesn't care about whitespaces, line breaks, or indentation. You can write your code however you like!

Timelines can be nested:

```CronoScript
"Projects" [

    "Car project" [
        (01/01/2023) "Buy the car",
        (01/01/2023 > 02/02/2023) "Fix the car",
        (02/02/2023) "Sell the car"
    ],

    "House project" [
        (01/01/2023) "Buy the house",
        (01/01/2023 > 02/02/2023) "Renovate the house",
        (02/02/2023) "Sell the house"
    ]
]
```

## Variables
You can define variables to store values and reuse them later. Almost everything can be stored in a variable, simply use the appropriate keyword:

* **string** to store a text label:
```CronoScript
string description = "Car project"
```
* **date** to store a date:
```CronoScript
date birthday = 09/09/2023
date lunch = 01/01/2023 12:00
date rendezvous = monday 5 january 2023 15:00
```

* **span** to store a task's time span:
```CronoScript
span taskSpan = (01/01/2023 > 02/02/2023)
```

* **duration** to store a duration, e.g. `2 days`
```CronoScript
duration taskDuration = 2 days
duration meetingDuration = 1 hour 30 minutes
duration projectDuration = 6 months
```

* **event**
```CronoScript
event birthday = (01/01/2023) "Tom's birthday"
```
* **task**
```CronoScript
task carFix = (01/01/2023 > 02/02/2023) "Fix the car"
```

* **timeline**
```CronoScript
timeline carProject = "Car project" [
    (01/01/2023) "Buy the car",
    carFix,
    (02/02/2023) "Sell the car"
]
```

## Date operations
### Addition and substraction
You can add a duration to a date to get a new date. Simply use the `+` operator:
```CronoScript
(01/01/2023 + 2 days)
// Is equivalent to
(03/01/2023)
```
This can be used for events or tasks:
```CronoScript
(01/02/2023 > 01/02/2023 + 2 days) "Write an essay"
```
As the date is the same before and after the `>` operator, you can omit the second date:
```CronoScript
(01/02/2023 >+ 2 days) "Write an essay"
```
You can do the same with substraction, using the `-` operator:
```CronoScript
(01/01/2023 - 2 days) "Expedited meeting"
(01/01/2023 > 15/02/2023 - 1 week) "Shortened project"
```

### Multiplication and division
You can multiply or divide a duration by a number to get a new duration. Simply use the `*` or `/` operator:
```CronoScript
2 days * 2
// Is equivalent to
4 days
```

### Delay
You may want to communicate a delayed date, while keeping track of the original date. A delayed date is a special kind of date that is represented by the original date, followed by `...` and the delayed date:
```CronoScript
(02/01/2023...03/01/2023) "Delayed event"
```
As we saw before, a date can also be an addition of a duration to a date:
```CronoScript
(02/01/2023...02/01/2023 + 1 day) "Delayed event"
```
This can be shortened to:
```CronoScript
(02/01/2023...+ 1 day) "Delayed event"
```
Of course, you can use this with tasks:
```CronoScript
(02/01/2023 > 14/01/2023...+ 1 week) "Delayed task"
```
And make use of variables:
```CronoScript
date start = 02/01/2023
date end = 14/01/2023
duration taskDuration = 1 month
duration delay = 1 week

(start > end...+ delay) "Delayed task 1"
(start...+delay >+ taskDuration) "Delayed task 2"
```

You can use this notation to represent an expedited date, by using a negative duration:
```CronoScript
(02/01/2023...- 1 day) "Expedited event"
```

## Options
Events, tasks, and timelines, and even the whole document, can have options. Options can be used to add more information to an element, or to change its behavior or appearance.

Options are written after a `#` symbol:
```CronoScript
(01/01/2023) "Dad's birthday" #color:blue #font-size:20px
```
A list of options is yet to be defined.

## Tags
Tags are used to tag people, places, or anything you want. They are written after a `@` symbol:
```CronoScript
(01/01/2023) "Dad's birthday" @family
```