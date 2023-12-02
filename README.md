# CronoScript Compiler
## Introduction
Welcome to the CronoScript compiler repository! This project is used to design **CronoScript**, a new _Domain Specific Language (DSL)_ for generating dynamic plannings, particularly useful for project management.

CronoScript is used in the [Cronodile application](https://www.cronodile.com) to generate plannings representations from text.

This project is a work in progress. The language may drastically change in the future, and a lot of features are still to come.

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
A task is exactly like an event, but with 2 dates:

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

* **string** to store a text label, e.g. `"Car project"`
* **date** to store a date, e.g. `01/01/2023`, `01/01/2023 12:00` or `monday 1 january 2023`
* **span** to store a task's time span, e.g. `(01/01/2023 > 02/02/2023)`
* **duration** to store a duration, e.g. `2 days`
* **event**
* **task**
* **timeline**

Examples:
```CronoScript
string description = "Car project"

date start = 01/01/2023

date end = 02/02/2023

span taskSpan = (01/01/2023 > 02/02/2023)

duration taskDuration = 2 days

event event = (01/01/2023) "Tom's birthday"

task task = (01/01/2023 > 02/02/2023) "Fix the car"

timeline timeline = "Car project" [
    (01/01/2023) "Buy the car",
    (01/01/2023 > 02/02/2023) "Fix the car",
    (02/02/2023) "Sell the car"
]
```
