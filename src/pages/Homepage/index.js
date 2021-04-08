import React from 'react'
import Banner from "../../components/Banner";
import Albums from "../../components/Albums";
const Homepage = ({ albums }) => {
    return (
        <div>
            <Banner />
            {/* <div className="container">
              <AddProduct onAdd={addProduct} />
            </div> */}
            <Albums data={albums} />
            {/* <button onClick={onChangeStatus}>button</button>
            <button onClick={() => setName("Quyết")}>Click</button>
            {status ? 'On' : 'Off'} */}
            {/* onDelete={onHanleRemode} */}

        </div>
    )
}

export default Homepage
