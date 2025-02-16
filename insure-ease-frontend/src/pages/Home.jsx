import { Link } from "react-router-dom";
import CarInsurance from '../assets/images/car.png';
import HealthInsurance from '../assets/images/health.png';
import HouseInsurance from '../assets/images/house.png';
import LifeInsurance from '../assets/images/life.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Enhanced Carousel */}
      <div id="carouselExample" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[CarInsurance, LifeInsurance, HealthInsurance, HouseInsurance].map((image, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="d-flex justify-content-center position-relative">
                <img src={image} className="d-block img-fluid w-75 rounded" alt="Insurance" />
                <div className="carousel-caption d-none d-md-block bg-primary text-white rounded p-2">
                  <h5>Secure Your Future with Us</h5>
                  <p>Get the best insurance plans tailored for you.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* CTA Section */}
      <div className="text-center my-5">
        <h1 className="fw-bold text-primary">Find the Best Insurance Plan for You</h1>
        <p className="lead text-muted">Compare different insurance plans and get a personalized quote.</p>
        <Link to="/insurance-options" className="btn btn-primary btn-lg">Get a Quote</Link>
      </div>

      {/* Insurance Categories with Hover Effect */}
      <div className="container text-center">
        <h2 className="mb-4 fw-bold text-primary">Explore Our Insurance Plans</h2>
        <div className="row g-4">
          {[
            { img: CarInsurance, title: "Car Insurance",cta:"/insurance/car" },
            { img: LifeInsurance, title: "Life Insurance",cta:"/insurance/life" },
            { img: HealthInsurance, title: "Health Insurance",cta:"/insurance/health" },
            { img: HouseInsurance, title: "Home Insurance",cta:"/insurance/home" }
          ].map((item, index) => (
            <div className="col-12 col-sm-6 col-md-3" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded overflow-hidden position-relative">
                <img src={item.img} className="card-img-top p-3 img-fluid" alt={item.title} />
                <div className="card-body bg-light">
                  <h5 className="card-title text-primary">{item.title}</h5>
                  <Link to={item.cta} className="btn btn-primary w-100">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container my-5 py-5 text-center bg-primary text-white rounded">
        <h2 className="fw-bold">Why Choose Us?</h2>
        <p className="fs-5">We provide affordable and reliable insurance solutions tailored to your needs.</p>
        <Link to="/insurance-options" className="btn btn-light text-primary fw-bold">Explore Plans</Link>
      </div>
    </div>
  );
};

export default Home;
