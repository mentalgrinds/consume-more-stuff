function filterRoles(arr,key,query){
  const data = arr.filter((elem) => {
  return elem[key] === query;  
});
  return data;
}


export default filterRoles;