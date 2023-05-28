import "./FeatureProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useEffect";

const FeatureProducts = ({ type }) => {
  // //////////////////////////////strAPI////////////////////////////
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  // ////////////////////////////////////////////////////////////////

  return (
    <div className="featureProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="bottom">
        {error?"Someting went wrong!" :(loading
          ? "loading"
          : data?.map((item) => {
              return <Card item={item} key={item.id} />;
            }))}
      </div>
    </div>
  );
};

export default FeatureProducts;
