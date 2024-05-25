
const Battery = () => {
  return (
    <div className="category">
      <label>
        <input type="radio" name="battery" id="" value={2} />
        0 - 3000 mAh
      </label>
      <label>
        <input type="radio" name="battery" id="" />
        3 000 - 5 000 mAh
      </label>
      <label>
        <input type="radio" name="battery" id="" />
        ≥ 5 000 mAh
      </label>
    </div>
  );
}

export default Battery