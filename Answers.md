# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a User Interface Component Library built by Facebook. It's try to solve problem of scalability and reusability.

2.  What does it mean to _think_ in react?
- all is a component
- we're never mutate data
- we're using data to visualize and drive our views 

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
- syntax (functional is a plain JavaScript function which accepts props as an argument and returns a React element, class component requires you to extend from React.Component and create a render function which returns a React element)
- Because a functional component is just a plain JavaScript function, you cannot use setState() in your component.


4.  Describe state.
State is the data, that our components can hold onto and pass around to other components. When the state updates so too will our components. It drives our application. 

5.  Describe props.
Every component can recieve props, they can be passed around from top to bottom given our components access to the data. Sometimes they can be passed also from bottom up through event handlers. Props are immutable (you can't change there assignment, you can only read them).
