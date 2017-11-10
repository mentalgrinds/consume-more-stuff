import React from 'react';

//props to be given to each select element by whichever container renders this:
//name=category, condition, item-status, etc.
//handler=the function triggered by onChange. this.handleChangeCondition, etc.
//list=the array of items to be turned into a select element. this.props.categories, this.props.conditions, etc.
//show=name of the column in the table that actually shows what it is. usually 'title' in our case.

const Radio = (props) => {
  return (
    <form>
          {
        props.list.map((item) => {
          return (
          <div>
            <input type='radio' name={props.name} value={props.value}/> {item[props.show]}
            </div>
                );
              })
          }
      </form>
  )
}

export default Radio;

      