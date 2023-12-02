# CronoScript
A programming language to generate plannings.

## Put a milestone on the timeline by writing:
(01/01/2023)
// The format here is DD/MM/YYYY

// Give it a label by writing it inside brackets
(01/01/2023) ["Dad's birthday"]

// Define the title of the horizontal line on which the milestone stands
"Birthdays" (01/01/2023) ["Dad's birthday"]

// You can arrange this in any order you like
(01/01/2023) "Birthdays" ["Dad's birthday"]
(01/01/2023) ["Dad's birthday"] "Birthdays"
["Dad's birthday"] (01/01/2023) "Birthdays"


// You can put several milestones on the same line (timeline)
// Just put them inside parenthesis and separate them with a comma
"Birthdays" ((01/01/2023) ["Dad's birthday"], (10/02/2023) ["Mom's birthday"])


// Or for better lisibility:
Birthdays (
	(01/01/2023) [Dad's birthday],
	(10/02/2023) [Mom's birthday]
)

// A task is like a milestone but with 2 dates (use `>`)
(01/02/2023 > 10/02/2023) [Prepare mom's birthday]

// You can arrange them on timelines like the milestones
House (01/02/2023 > 01/03/2023) [Decorate the kitchen]
Car (
	(01/02/2023 > 02/02/2023) [Fix the car],
	(02/02/2023 > 03/02/2023) [Sell the car]
)

// You can mix tasks and milestones together
Car (
	(01/02/2023) [Buy the car],
	(01/02/2023 > 02/02/2023) [Fix the car],
	(02/02/2023 > 03/02/2023) [Sell the car]
)

// You can even set a label to this group, acting like a 'super task'
Car [First project] (
	(01/02/2023) [Buy the car],
	(01/02/2023 > 02/02/2023) [Fix the car],
	(02/02/2023 > 03/02/2023) [Sell the car]
)

// The elements of the group can even have their own timeline title
Car [First project] (
	Thomas (01/02/2023) [Buy the car],
	Stephany (01/02/2023 > 02/02/2023) [Fix the car],
	David (02/02/2023 > 03/02/2023) [Sell the car]
)
// This way, the super task will show on top of its subtasks and milestones

// You can compose groups together as you want
Big Project (
	[Preparation] Team 1 (
		(01/01/2023) [Step 1] Thomas,
		(02/01/2023) [Step 2] Lucas
	),
	[Work] Team 2 (
		(02/01/2023, 01/02/2023) [Work hard] Lucy,
		(01/02/2023, 01/03/2023) [Work harder] Mary,
	),
	[Conclusion] Team 3 (
		(05/03/2023) [Show the results] Boss
	),
)


// You can perform additions with dates
(01/02/2023 > 01/02/2023 + 2 days) [Write an essay]

// Or for short
(01/02/2023 >+ 2 days) [Write an essay]
// You can add second(s), minute(s), hour(s), day(s), week(s), month(s), year(s).

// You may want to show a delayed date by using `...` 
(01/01/2023 > 02/01/2023...03/01/2023) [Fix the car]
// or for short
(01/01/2023 > 02/01/2023...+ 1 day) [Fix the car]
// It works for tasks' start dates, end dates, and milestones.

// For more flexibility, you can define dates variables with the `date` keyword
date start = 01/01/2023
date duration = 5 days
date delay = 2 days

// You can use them in milestones and tasks
(start >+ duration) Task 1
(start...+ delay > start + duration + delay) Task 2