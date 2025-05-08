/////////////////////////////////////////////////
// 197-How-the-DOM-Really-Works

/*

The DOM is an API: Application Programming Interface
The DOM interfaces between Js and the browser.
The DOM is very complex: methods() and .properties
The DOM tree is generated from the HTML document and is comprised of nodes.
Each node is represented by an object
Each node gets access to particular methods() and .properties.
Many types of nodes in the DOM tree: Elements, Text, Comments, and Document.
Element nodes have an HTMLElement for every type of html element, each with its particular methods() and .properties

INHERITANCE: All child node types get access to methods() and .properties of their parent node types.
.addEventListener() is an EventTarget accessible by the Window global object and all its children.
.querySelector() is a method for Element nodes and also Document nodes.

*/
