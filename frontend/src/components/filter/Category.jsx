const Category = () => {
  return (
    <div className="category">
      <label>
        <input type="radio" name="category" id="" value={2}/>
        Phantom
      </label>
      <label>
        <input type="radio" name="category" id="" />
        Spark
      </label>
      <label>
        <input type="radio" name="category" id="" />
        Camon
      </label>
      <label>
        <input type="radio" name="category" id="" />
        Pova
      </label>
      <label>
        <input type="radio" name="category" id="" />
        Pop
      </label>
    </div>
  );
};

export default Category;
