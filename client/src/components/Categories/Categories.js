import "./Categories.scss";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://media.very.co.uk/i/very/UYPLY_SQ1_0000000047_GREEN_MDf/v-by-very-double-breasted-soft-blazer-greennbsp.jpg?$234x312_retinax2$&fmt=webp"
            alt="img1"
          />
          <button>
            <Link to="/products/1" className="link">
              Woman
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://media.very.co.uk/i/very/VFG9J_SQ1_0000000003_NATURAL_SLs/schuh-sicily-strappy-square-toe-sandal-natural.jpg?$234x312_retinax2$&fmt=webp"
            alt="img"
          />
          <button>
            <Link to="/products/1" className="link">
              Showes
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.media.amplience.net/i/sd/CR8-5991-d-s2?fmt=webp"
            alt="img1"
          />
          <button>
            <Link to="/products/1" className="link">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.media.amplience.net/i/sd/CR8-6339-d-s2?fmt=webp"
                alt="img1"
              />
              <button>
                <Link to="/products/1" className="link">
                  Children
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://media.very.co.uk/i/very/PRENY_SQ1_0000001295_BLACK_TAN_SLf/everyday-two-pack-leo-double-buckle-beltsnbsp--blacktan.jpg?$234x312_retinax2$&$roundel_very$&p1_img=very_further_reductions&fmt=webp"
                alt="img"
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://img.freepik.com/free-photo/portrait-attractive-stylish-smiling-woman-walking-city-street-pink-coat-floral-dress_285396-1322.jpg?w=996&t=st=1685211525~exp=1685212125~hmac=af58220b2f564afc4607db20d528d9f2f9925c290f72ef8a13f65cb50894c45d"
            alt="img1"
          />
          <button>
            <Link to="/products/1" className="link">
              Showes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
