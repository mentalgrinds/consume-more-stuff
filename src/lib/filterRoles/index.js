function filterRoles(arr,id){

  const data = arr.filter((elem) => {
  return elem.admin === true;  
});
  return data.filter((elem)=>{
    return elem.id === parseInt(id);
  })
}


export default filterRoles;