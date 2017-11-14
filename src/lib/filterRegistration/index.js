function filterRegistration(arr,key,query){
  const data = arr.filter((elem) => {
    return elem[key] === query;
  });
  let res = data.pop();

  return res;}


export default filterRegistration;