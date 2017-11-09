function filterItem(arr,query){
  const data = arr.filter((elem) => {
  return elem.userId === parseInt(query);  
});
  return data;
}


export default filterItem;