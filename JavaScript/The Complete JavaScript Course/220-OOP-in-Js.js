/////////////////////////////////////////////////
// 220-OOP-in-Js

// OOP in Js: Prototypal Inheritance/Delegation

- Objects are linked to a prototype object which contains all the methods and properties accessible to objects linked to it.

- Behavior is delegated to the linked prototype.

- The four principles of abstraction, encapsulation, inheritance, and polymorphism are important in Js OOP.

How do we create new objects without having classes? How do we create prototypes? How do we link objects to prototypes? How do we implement prototypal inheritance? Three ways:

1. Constructor functions
 - Create objects programmatically from a function.
 - Built-in Arrays, Sets, Maps are implemented this way.
 - This is how OOP has been done in Js since the beginning.
2. ES6 Classes
 - Modern alternative to constructor functions.
 - "Syntactic  sugar," just a layer of abstraction, over constructor functions
 - Do not behave like real classes.
3. Object.create()
 - The easiest and most straightforward way to link and object to a prototype object.
 - Not used as much as the other 2 ways.
