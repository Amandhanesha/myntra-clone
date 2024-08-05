import { useSelector } from "react-redux";

const BagSummary = () => {
  const BagItems = useSelector((state) => state.bag);
  
  const items = useSelector((state) => state.item);

  // Check if bagItems contains item IDs or objects
  const finalItems = items.filter((item) => {
    if (typeof BagItems[0] === "object") {
      return BagItems.some(BagItems => BagItems.id === item.id);
    }
    return BagItems.includes(item.id);
  });
  
  const CONVENIENCE_FEES = 99;
  let totalItem = BagItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((BagItems) => {
    totalMRP += BagItems.original_price;
    totalDiscount += BagItems.original_price - BagItems.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;


  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} Items)
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{BagSummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
