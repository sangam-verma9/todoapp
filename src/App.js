import React, { useState } from "react";
import './Items'
import Items from "./Items";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  const [buy, nextval] = useState("")
  const [item, setitem] = useState([])

  const input = (event) => {
    nextval(event.target.value)
  }

  const display = () => {
    setitem((olditem) => {
      return [...olditem, buy] // copy all values using spread operator
    })
    nextval("");// for refreshing val of input fild
  }
  const deleteitem = (id) => {
    // console.log("deleted")
    setitem((olditem) => {
      return olditem.filter((arrele, index) => {
        return index !== id
      })
    })
  }

  return (
    <> <section className="main">
      <div className="container mx-auto mt-5  mb-4">
        <div className="row">
          <div className="col-md-8 col-sm-10 col-xs-10 mx-auto box">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="Add a item" onChange={input} value={buy} />
            <button onClick={display} className="add">+</button>
            <ol>
              {/* <li>{buy}</li> */}
              {
                item.map((itemval, index) => {
                  return (
                    <Items
                      key={index}
                      id={index}
                      text={itemval}
                      onselect={deleteitem}
                    />
                  )

                })
              }
            </ol>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default App;