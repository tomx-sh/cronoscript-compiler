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

- **🛎️ Event**: An event is a point in time. It can be used to represent a milestone, a deadline, or anything that happens at a specific time.
- ** Task**: A task is a period of time. It can be used to represent a project, a meeting, or any activity that takes place over a period of time.
- **Timeline**: A timeline is a group of milestones and tasks.