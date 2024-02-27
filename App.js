import React from "react";
import "./index.css";
const App = () => {
  return (
    <>
      <h1 className="text-center text-danger mt-5">Welcome to my Website</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/200/300"
                className="card-img-top"
                alt="..."
                height="220px"
              />
              <div className="card-body">
                <h5 className="card-title">Title 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/201/300"
                className="card-img-top"
                alt="..."
                height="220px"
              />
              <div className="card-body">
                <h5 className="card-title">Title 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/202/300"
                className="card-img-top"
                alt="..."
                height="220px"
              />
              <div className="card-body">
                <h5 className="card-title">Title 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
