import React from "react";

function TourCard(props) {
  let { name, difficulty, duration } = props;
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cmlzdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          className="card-img-top img-fluid"
          alt={name}
        />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Duration: {duration} days</li>
          <li className="list-group-item">Difficulty: {difficulty}</li>
          {/* <li class="list-group-item">A third item</li> */}
        </ul>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsam voluptatem voluptatum dolorum corrupti, fugit voluptatibus quasi consectetur suscipit quo optio quis, distinctio sint, similique alias blanditiis exercitationem. Provident, quaerat!</p>
          <a href="#" className="btn btn-light">
            More about {name}...
          </a>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
