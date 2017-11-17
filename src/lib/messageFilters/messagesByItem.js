function messagesByItem(arr,query){

  const data = arr.filter((elem) => {
    return elem.itemId === query;
  });
  
  return data;
}


export default messagesByItem;