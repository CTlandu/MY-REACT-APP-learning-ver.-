

function Button()
{
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    boarderRadius: "5px",
    border: "none",
    cursor: "pointer",

  }
  let count = 0;

  // const handleClick = (name) => 
  // {
  //   if (count < 3){
  //     count++;
  //     console.log(`${name} you cliked me ${count} time/s`);
  //   }
  //   else{
  //     console.log(`${name} stop clicking me!`);
  //   }
  // }
  const handleClick = (e) => e.target.textContent = "Ouch~";

  const handleClick2 = (name) => console.log(`${name} stop clicking me`);


  return(<button onDoubleClick={(e)=>handleClick(e)} style={styles}> Click me </button>);
}

export default Button;