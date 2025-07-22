/*
/////////////////////////////////////////////////
// 248-Project-Architecture

It is time to come up with an initial approach to structuring the code.

There are advanced architectures in JavaScript, which we will get to in this course.

Architecture is about giving the project structure, and developing the functionality within that structure.

In this project, that structure will just come from OOP: classes and objects.

In any architecture, one of the most important aspects is: where to store the data. This comes from user stories:

1. Log my running workouts with
  - location
  - distance
  - time
  - pace
  - cadence (steps/min)
  
2. Log my cycling workouts with 
  - location
  - distance
  - time
  - speed
  - elevation gain

Design classes so they contain objects that can contain that data.

Design functions that handle the events we have so far:
- load page
- receive position
- click on map
- change input
- submit form

These will be handled by methods() in a "Class App." A more complex app might have separate classes for business logic and UI.

(Business logic and user interface (UI) represent two distinct layers in software development, each with its own responsibilities and characteristics. Business logic refers to the set of rules, processes, and computations that govern the core functionality of an application, such as data validation, transaction handling, and business rules enforcement. On the other hand, the UI is the part of the application that users interact with directly, including elements like buttons, forms, and layouts designed to display information and receive user inputs.)

*/
