import "./styles/popularCatagories.css";

const PopularCatagories = () => {
  return (
    <div className="popularCategories-foodi">
      <h3 className="subtitle-popular-categories">Customer Favorites</h3>
      <h2 className="title-popular-categories">Popular Catagories</h2>
      <div className="cards-popular-categories-box">
        <div className="card-popular-categories">
          <div className="circle-popular-categories">
            <img src="/burger-img.png" alt="img not found" />
          </div>

          <p>Main Dish</p>
          <span>(86 dishes)</span>
        </div>

        <div className="card-popular-categories">
          <div className="circle-popular-categories">
            <img
              src="/92cebe7826b91979d7ec7154dc714870.png"
              alt="img not found"
            />
          </div>

          <p>Break Fast</p>
          <span>(12 break fast)</span>
        </div>

        <div className="card-popular-categories">
          <div className="circle-popular-categories">
            <img
              src="/00a7e066cf0ba10fb8fcd8d7604eb761.png"
              alt="img not found"
            />
          </div>

          <p>Dessert</p>
          <span>(48 dessert)</span>
        </div>

        <div className="card-popular-categories">
          <div className="circle-popular-categories">
            <img
              src="/66e0e5da0f9f7eab54d2ff4a36225a83.png"
              alt="img not found"
            />
          </div>

          <p>Browse All</p>
          <span>(255 Items)</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCatagories;
