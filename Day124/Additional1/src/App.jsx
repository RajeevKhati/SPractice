import { useState, useEffect, useRef } from "react";
import { fetchBio } from "./api.js";
import "./App.css";

export default function App() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);
  const currentPerson = useRef("");

  useEffect(() => {
    setBio(null);
    currentPerson.current = person;
    fetchBio(person).then((result) => {
      if (currentPerson.current === person) {
        setBio(result);
      }
    });
  }, [person]);

  return (
    <div className="App">
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </div>
  );
}
