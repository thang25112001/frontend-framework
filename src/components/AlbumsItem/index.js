import React from 'react'

const AlbumsItem = ({ data, onDelete }) => {
  return (
    <div>
      <div className="col">
        <div className="card shadow-sm">
          <img src={data.avatar} width="100%" height={225} />
          <div className="card-body">
            <p className="card-text">
              {data.name}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary" onClick={() => onDelete(data.id)}
                >
                  DELETE
                    </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                    </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AlbumsItem