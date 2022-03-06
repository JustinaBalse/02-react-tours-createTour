import NewTour from "./components/NewTour";
import ToursList from "./components/Tourslist";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <NewTour />
        </div>
      </div>
      <div className="row">
        <ToursList />
      </div>
    </div>
  );
}

export default App;
