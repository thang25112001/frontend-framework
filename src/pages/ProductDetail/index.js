import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    let { id } = useParams();
    const [albumItem, setAlbumItem] = useState({})
    useEffect(() => {
        const onHandleDetail = async (id) => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products/${id}`)
                const data = await response.json();
                setAlbumItem(data);
            } catch (error) {
                console.log(error);
            }
        }
        onHandleDetail();
    }, [])
    return (
        <div>
            {albumItem}
        </div>
    )
}

export default ProductDetail