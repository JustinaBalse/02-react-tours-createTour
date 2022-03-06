import React, { useState } from "react";
import { createTour } from "../api/lib/tourAPI";

function NewTour() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");

  function onSubmitForm() {
    console.log(name, difficulty, duration);
    createTour({
      name: name,
      duration: duration,
      difficulty: difficulty,
    });
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="tourName" className="form-label">
          Tour name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          id="tourName"
          placeholder="Enter tour name..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="difficulty" className="form-label">
          Difficulty
        </label>
        <input
          onChange={(e) => setDifficulty(e.target.value)}
          type="text"
          className="form-control"
          id="difficulty"
          placeholder="Enter tour difficulty..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="duration" className="form-label">
          Duration
        </label>
        <input
          onChange={(e) => setDuration(e.target.value)}
          type="text"
          className="form-control"
          id="duration"
          placeholder="Enter tour duration..."
        />
      </div>
      <button onClick={onSubmitForm} type="submit" className="btn btn-light">
        Create Tour
      </button>
    </div>
  );
}

export default NewTour;
