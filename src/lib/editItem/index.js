let local = {};

export function editHelper(e){
console.log('edit method lib helper has been fired');
  if(e.target.name === 'name')        { local.name=e.target.value; }
  if(e.target.name === 'status')       { local.itemstatusId=parseInt(e.target.value); }
  if(e.target.name === 'user')        { local.user=e.target.value; }
  if(e.target.name === 'description') { local.description=e.target.value; }
  if(e.target.name === 'price')       { local.price=parseInt(e.target.value); }
  if(e.target.name === 'category')    { local.categoryId=parseInt(e.target.value); }
  if(e.target.name === 'condition')   { local.conditionId=parseInt(e.target.value); }
  if(e.target.name === 'manufacturer') { local.manfucturer=e.target.value; }
  if(e.target.name === 'model')       { local.model=e.target.value; }
  if(e.target.name === 'dimensions')  { local.dimensions=e.target.value; }
  if(e.target.name === 'notes')       { local.notes=e.target.value; }

  console.log('local', local)
  return local;
}

export function clearLocal(){
  local = {};
}

export default { editHelper, clearLocal };

