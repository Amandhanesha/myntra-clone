import BagItems from "../Components/BagItems";
import BagSummary from "../Components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.item);

  // Check if bagItems contains item IDs or objects
  const finalItems = items.filter((item) => {
    if (typeof bagItems[0] === "object") {
      return bagItems.some(bagItem => bagItem.id === item.id);
    }
    return bagItems.includes(item.id);
  });

  console.log("Final items to display:", finalItems);

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
