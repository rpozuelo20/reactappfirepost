import React, { Component } from "react";
import Post from "./../Post/Post";
import PostForm from "./../Post/PostForm";
import axios from "axios";
import Global from "./../../Global";
import toast, { Toaster } from "react-hot-toast";

export default class Home extends Component {
  state = {
    posts: [],
    status: false,
  };

  notifyCustom = (props, params) => {
    return toast(props, params);
  };
  notifyCommon = () => {
    return toast;
  };

  getPosts = () => {
    var request = "/.json";
    var url = Global.firebaseapi + request;
    axios.get(url).then((res) => {
      // Como firebase nos almacena los datos de la api en forma de objeto y no array, debemos de convertir ese objeto con propiedades a array de objetos
      var posts = res.data; // Recogemos los datos de res en una var posts
      var array = []; // Creamos un array vacio
      for (var key in posts) {
        // Hacemos el bucle para recorrer los posts
        var post = posts[key]; // Creamos una var post que almacena el posts[su posicion o nombre, se podria decir]
        array.push(post); // Hacemos un push de cada post dentro de nuestro array
      }
      this.setState({
        // Realizamos el setState dentro de posts del array
        posts: array,
        status: true,
      });
      return this.notifyCommon().success("Los posts fueron cargados!");
    });
  };

  deletePost = (index) => {
    this.state.posts.splice(index, 1);
    this.setState({
      posts: this.state.posts,
    });
    return this.notifyCommon().error("El post fue eliminado!");
  };

  favoritoPost = () => {
    return this.notifyCustom("El post te gusta!", {
      icon: "❤️",
    });
  };

  notifyAdd = () => {
    return this.notifyCommon().success("El post fue añadido!");
  };

  componentDidMount = () => {
    this.notifyCustom(
      "React hot toast es una librería de notificaciones que nos ofrece una gran variedad de opciones, distintos ejemplos de notificaciones, notificaciones personalizadas y mucho más.",
      {
        duration: 6000,
      }
    );
    this.getPosts();
  };

  render() {
    return (
      <main role="main">
        <Toaster position="bottom-left" reverseOrder={false} />
        <section className="jumbotron text-center pt-5 pb-5">
          <div className="container">
            <h1 className="jumbotron-heading">React con notificaciones</h1>
            <p className="lead text-muted">
              Se trata de implementar la librería de <b>react-hot-toast</b> en
              el proyecto y poder ofrecer una serie de notificaciones cuando
              distintas acciones se realicen.
              <br />
              Podréis acceder a este proyecto desde mi <b>GitHub</b> personal.
            </p>
            <p>
              <button
                className="btn btn-success my-2 m-1"
                onClick={this.getPosts}
              >
                <i className="bi bi-arrow-clockwise"></i> Re-load
              </button>
              <a
                href="https://react-hot-toast.com/"
                target="_blank"
                className="btn btn-primary my-2 m-1"
              >
                React hot toast
              </a>
              <a
                href="https://github.com/rpozuelo20/ReactApps.git"
                target="_blank"
                className="btn btn-secondary my-2 m-1"
              >
                <i className="bi bi-github"></i>
              </a>
            </p>
          </div>
          <div className="container">
            <hr />
            <center>
              <PostForm getPosts={this.getPosts} notifyAdd={this.notifyAdd} />
            </center>
          </div>
        </section>

        {this.state.status === true && this.state.posts.length > 0 ? (
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                {this.state.posts.map((post, index) => {
                  return (
                    <Post
                      index={index}
                      key={index}
                      post={post}
                      deletePost={this.deletePost}
                      favoritoPost={this.favoritoPost}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="album py-5 bg-light">
            <div className="container">
              <h2 className="text-center">Todos los posts fueron eliminados</h2>
            </div>
          </div>
        )}
      </main>
    );
  }
}
