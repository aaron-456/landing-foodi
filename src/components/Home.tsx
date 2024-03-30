import "./styles/home.css";

const Home = () => {
  return (
    <div className="home-foodi">
      <div className="box-one-home">
        <div className="title-box-home">
          <h1 className="title-home">Dive into Delights Of Delectable </h1>
          <span className="text-food-home">Food</span>
        </div>

        <p className="paragraph-introductory-home">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>

        <div className="buttons-box-home">
          <button className="button-order-now">Order Now</button>
          <div className="button-watch-Video">
            <p className="paragraph-watch-Video"> Watch Video</p>
            <div className="circle-watch-video">
              <i className="bx bxs-right-arrow"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="box-two-home">
        <img
          className="hot-spicy-food-img"
          src="/hot-spicy-Ct8x7R3l.png"
          alt="img not found"
        />

        <div className="image-container">
          <img
            className="image-home"
            src="/image-woman.png"
            alt="img not found"
          />
        </div>

        <div className="menu-targets-box-home">
          <div className="menu-target-home">
            <img src="/food-one.png" alt="img not found" />
            <div className="information-menu-target-box">
              <p className="paragraph-menu-targets">Spicy noodles</p>
              <div className="box-stars-home">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
                <i className="bx bx-star"></i>
              </div>
              <div className="price-menu-targets-box">
                <span className="icon-dollar-home">$</span>
                <span className="price-home">18.00</span>
              </div>
            </div>
          </div>

          <div className="menu-target-home">
            <img src="/food-two.png" alt="img not found" />
            <div className="information-menu-target-box">
              <p className="paragraph-menu-targets">Vegetarian salad</p>
              <div className="box-stars-home">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bx-star"></i>
              </div>
              <div className="price-menu-targets-box">
                <span className="icon-dollar-home">$</span>
                <span className="price-home">23.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
