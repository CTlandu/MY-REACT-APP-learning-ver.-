import PropTypes from "prop-types"

function List(props){
  
  const category = props.category;
  const itemList = props.items;

  //fruits.sort((a,b) => a.name.localeCompare(b.name)); //Alphabetical
  //fruits.sort((a,b) => b.name.localeCompare(a.name)); //Reverse Alphabetical
  //fruits.sort((a,b) => a.cal - b.cal); //numeric
  //fruits.sort((a,b) => b.cal - a.cal); //reverse numeric

  // const lowCalFruit = itemList.filter(items => items.cal < 100);


  const listItems = itemList.map(item => <li key={item.id}>
                                              {item.name}: &nbsp;
                                              <b>{item.cal}</b></li>);
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );

}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number},
                                            {name: PropTypes.string},
                                            {cal: PropTypes.number}))
}

List.defaultProps = {
  category: "Category",
  items: []
}


export default List