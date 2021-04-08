import React from 'react'
import { Link } from 'react-router-dom';
const ManagerProducts = ({ albums, onDelete }) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Anh</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album, index) => {
                        return <tr key={index}>
                            <td scope="row">{index + 1} </td>
                            <td>{album.name}</td>
                            <td><img src={album.avatar} width="100px" /></td>
                            <td>
                                <Link class="btn btn-primary btn-sm" to={`manager/edit/${album.id}`}>Sửa</Link> |
                            <a onClick={() => onDelete(album.id)} class="btn btn-danger btn-sm">Xóa</a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ManagerProducts
