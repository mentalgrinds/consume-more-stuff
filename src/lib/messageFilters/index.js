function filterItemMsg(arr,query){
  let local = {image: "http://via.placeholder.com/350x150"}
  const data = arr.filter((elem) => {
    return elem.id === query;
  });
  let obj = data.pop();
  local.image = (arr.length !== 0 ? obj.image : "http://via.placeholder.com/350x150")

    Object.entries(local).forEach(([key, value]) => {
      local.image = value;
    //console.log(`${key} ${value}`); 
    });

  return local;
}


export default filterItemMsg;
