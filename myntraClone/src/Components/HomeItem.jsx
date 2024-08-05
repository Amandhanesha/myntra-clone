import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../Store/bagSlice";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag); // Access the bag items from the store
  const elementFound = bagItems.some((bagItem) => bagItem.id === item.id); // Check if the item is in the bag
  console.log(elementFound, item.id);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item)); // Dispatch the action to add the item to the bag
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeToBag(item.id)); // Dispatch the action to remove the item from the bag
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemoveFromBag} // Add click handler to remove item
        >
          <IoIosRemoveCircle />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag} // Add click handler to add item
        >
          <IoIosAddCircle />
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
