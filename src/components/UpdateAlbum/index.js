import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const UpdateAlbum = ({ data, onUpdate }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (album) => {
        const updatedAlbum = {
            ...data,
            ...album
        }
        onUpdate(updatedAlbum);
        history.push("/manager");
    }
    return (
        <div>
            <h2>Cập nhật sản phẩm</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                    <input type="text"
                        name="name"
                        placeholder="Tên sản phẩm"
                        className="form-control"
                        defaultValue={data.name}
                        ref={register}
                    />
                </div>
                <div className="form-group mb-2">
                    <input type="number"
                        name="price"
                        placeholder="Giá sản phẩm"
                        className="form-control"
                        defaultValue={data.price}
                        ref={register}
                    />
                </div>
                <div className="form-group mb-2">
                    <textarea name="desc"
                        className="form-control"
                        defaultValue={data.desc}
                        ref={register}
                    ></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Cập nhật sản phẩm" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default UpdateAlbum