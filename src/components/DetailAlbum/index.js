import React from 'react'

const DetailAlbum = ({ data }) => {
    return (
        <div>Chi tiết sản phẩm
            Name: {data.name}<br />
            Avatar: <img src={data.avatar} />
        </div>
    )
}

export default DetailAlbum