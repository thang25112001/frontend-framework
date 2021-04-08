import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = ({ onAdd }) => {
  const { register, handleSubmit, errors } = useForm();

  const onHandleSubmit = (data) => {
    onAdd(data)
  }
  return (
    <div>
      <div className="col-6">
        <h2>Thêm sản phẩm</h2>
        <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group mb-2">
            <input type="text"
              name="name"
              placeholder="Tên sản phẩm"
              className="form-control"
              ref={register({ required: true })}
            />
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-group mb-2">
            <input type="number"
              name="price"
              placeholder="Giá sản phẩm"
              className="form-control"
              ref={register({ required: true })}
            />
            {errors.price && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-group mb-2">
            <textarea name="desc"
              className="form-control"
              ref={register}></textarea>
          </div>
          <div className="form-group mb-2">
            <input type="checkbox" name="status"
              ref={register}
            />
                    Tình trạng
                </div>
          <div className="form-group">
            <input type="submit" value="Thêm sản phẩm" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct