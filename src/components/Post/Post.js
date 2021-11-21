import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 box-shadow shadow-sm">
          <img
            className="card-img-top"
            alt="Thumbnail [100%x225]"
            style={{
              height: "225px",
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
            src={this.props.post.image}
            data-holder-rendered="true"
          />
          <div className="card-body">
            <p className="card-text">{this.props.post.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    var index = this.props.index;
                    this.props.deletePost(index);
                  }}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => {
                    this.props.favoritoPost();
                  }}
                >
                  <i className="bi bi-heart-fill"></i>
                </button>
              </div>
              <small className="text-muted">{this.props.post.date}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
