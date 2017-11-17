function filterItemMsg(arr,query){
  let local = {image: "http://via.placeholder.com/350x150"}
  const data = arr.filter((elem) => {
    return elem.id === query;
  });
  let obj = data.pop();
  local.image = "http://via.placeholder.com/350x150";
local.image = "http://via.placeholder.com/350x150";
    // Object.entries(local).forEach(([key, value]) => {
    //   local.image = value;
    // //console.log(`${key} ${value}`); 
    // });
    local.name = "name"
    local.desc = "desc"
    local.price = "price"

  return local;
}


export default filterItemMsg;
