import React from "react";
import ReactDOM from "react-dom";

const Part = ({ part, exercise }) => (
  <p>
    {part} {exercise}
  </p>
);

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((item) => (
        <Part part={item.name} exercise={item.exercises}></Part>
      ))}
    </>
  );
};

const Total = ({ parts }) => (
  <>
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  </>
);

const App = () => {
  const course = {
    name: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
