import React, { useState } from 'react';
import Header from './Compo/Header';
import Footer from './Compo/Footer';
import Create from './Compo/Create';
import Note from './Compo/Note';

function App() {
  const [addItem, setAddItem] = useState([]);

  const addBtn = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  }

  const onDelete = (id) => {
    setAddItem((preData) => {
      return (preData.filter((currData, indx) => {
        return indx !== id;
      }))
    }
    )
  }

  return (
    <>
      <Header />
      <Create passNote={addBtn} />
      {addItem.map((val, index) => {
        return (<Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteItem={onDelete}
        />)
      })}
      <Footer />
    </>
  );
}
export default App;
