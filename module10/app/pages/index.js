const Home = ({ buildTimeStamp, foods, count }) => {
  return (
    <div id="master">
      <p>
        function map
      </p>
      <ul>
        {foods.map(({ id, name, color }) => (
          <li>
            <p><strong>{name}</strong></p>
            {color && <span>{color} </span>}
          </li>
        ))}
      </ul>
      <div>
        <p>ForEach</p>
        <p>{count}</p>
      </div>
    </div >
  )
}

export const getStaticProps = () => {
  const foods = [{ "name": "carrot", "id": 1, "color": "orange" }, { "name": "orange", "id": 2, "color": "yellow" }, { "name": "apple", "id": 3, "color": "green" },];
  var count = 0;
  foods.forEach(el => (count++));
  return {
    props: {
      buildTimeStamp: Date.now(),
      foods: foods,
      count: count,
    }
  }
}

export default Home;