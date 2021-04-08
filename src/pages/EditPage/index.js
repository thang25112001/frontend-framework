import React from 'react'
import UpdateAlbum from '../../components/UpdateAlbum';
import { useParams } from 'react-router-dom';

const EditPage = ({ albums, onUpdate }) => {
    const { id } = useParams();
    const album = albums.find(item => item.id === id);
    return (
        <div>
            <UpdateAlbum data={album} onUpdate={onUpdate} />
        </div>
    )
}

export default EditPage