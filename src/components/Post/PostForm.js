import axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";

export default class PostForm extends Component {
  imagenRef = React.createRef();
  descripcionRef = React.createRef();

  postPost = (e) => {
    e.preventDefault();
    var imagenVal = this.imagenRef.current.value;
    var descripcionVal = this.descripcionRef.current.value;
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var post = {
      date: date,
      description: descripcionVal,
      image: imagenVal,
    };
    var request = "/.json";
    var url = Global.firebaseapi + request;
    axios.post(url, post).then((res) => {
      this.props.getPosts();
      this.props.notifyAdd();
    });
  };

  render() {
    return (
      <form
        style={{ maxWidth: "516px" }}
        className="text-start"
        onSubmit={this.postPost}
      >
        <div className="mb-3">
          <label className="form-label">Imagen:</label>
          <input
            type="text"
            className="form-control"
            ref={this.imagenRef}
            required
          />
          <div className="form-text">Debe de ingresar la url de la imagen.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción:</label>
          <textarea
            required
            className="form-control"
            rows="3"
            ref={this.descripcionRef}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    );
  }
}
