import { useSelector } from "react-redux";
import HomeItem from "../Components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.item) || [];

  console.log("GOT ITEM", items);

  return (
    <main>
      <div className="items-container">
        {items.length > 0 ? (
          items.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
          <p>No items available</p>
        )}
      </div>
    </main>
  );
};

export default Home;
