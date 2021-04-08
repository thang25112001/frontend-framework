import React from 'react'
import Albums from "../../components/Albums";

const ProductPage = ({ albums }) => {
    return (
        <div>
            <Albums data={albums} />
        </div>
    )
}

export default ProductPage
