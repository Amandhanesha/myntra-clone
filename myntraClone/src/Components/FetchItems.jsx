import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../../Store/featchingStatusSlice";
import { itemsActions } from "../../Store/itemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus) || {};

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items));

      });
  }, [fetchStatus, dispatch]);

  return <></>;
};

export default FetchItems;
