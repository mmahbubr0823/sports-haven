import data from "../../../public/fakeData.json";
const FeaturedProducts = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div>
        {
            data.map(item=> <h1>{item.name}</h1>)
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;
