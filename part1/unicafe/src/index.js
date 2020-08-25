import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Statistics } from "./components/Statistics";

const Button = ({ text, handleClick }) => (
  <button onClick={() => handleClick()}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [nuetral, setNuetral] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const getAverage = () => (good - bad) / 2;
  const getTotal = () => good + bad + nuetral;
  const getPositivePercent = () => {
    const all = getTotal();
    if (!all) return "0%";
    return (good / all) * 100 + "%";
  };

  const statisticDetails = [
    {
      text: "Good",
      value: good,
    },
    {
      text: "Bad",
      value: bad,
    },
    {
      text: "Nuetral",
      value: nuetral,
    },
    {
      text: "All",
      value: getTotal(),
    },
    {
      text: "Average",
      value: getAverage(),
    },
    {
      text: "Positive Percentage",
      value: getPositivePercent(),
    },
  ];

  const genRandomAncedote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  console.log(votes);

  const getVote = () => {
    let newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  };

  const largest = () => {
    let index = 0;
    for (let i = 0; i < votes.length; i++)
      if (votes[i + 1] > votes[index]) index = i + 1;
    return index;
  };

  console.log(votes, largest());
  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)}></Button>
      <Button text="Bad" handleClick={() => setBad(bad + 1)}></Button>
      <Button
        text="Nuetral"
        handleClick={() => setNuetral(nuetral + 1)}
      ></Button>

      {!getTotal() ? (
        <p>no feedback given</p>
      ) : (
        <Statistics details={statisticDetails}></Statistics>
      )}
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button text="vote" handleClick={getVote}></Button>
      <Button text="next ancedote" handleClick={genRandomAncedote}></Button>

      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[largest()]}</p>
    </div>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
