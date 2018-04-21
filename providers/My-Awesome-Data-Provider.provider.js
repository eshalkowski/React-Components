import React from 'react';

export const MyAwesomeDataProvider = ({ children }) => {
  //This will be the asyncronous data....

  //API CALL HERE??
  const mockData = {
    name: 'DUDE',
    address: 'SWEET ASS RD'
  }

  return children(mockData);
}

export const MyAwesomeDataView = () => {
  return (
    <MyAwesomeDataProvider>
      {
        data => (
          <div>
            <div>{data.name}</div>
            <div>{data.address}</div>
          </div>
        )
      }
    </MyAwesomeDataProvider>
  )
}




/* const MyAwesomeDataView = ({ name, address }) => {
  return (
    <div>
      <div>name</div>
      <div>address</div>
    </div>
  )
} */