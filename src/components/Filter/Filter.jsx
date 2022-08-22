import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterContactSlice';

export default function Filter() {
  const filterInput = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    const inputValue = evt.currentTarget.value;
    dispatch(setFilter(inputValue));
  };

  return (
    <div>
      <h2>Filter</h2>
      <input type="text" value={filterInput} onChange={handleFilterInput} />
    </div>
  );
}
