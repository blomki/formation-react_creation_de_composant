import React, { Component } from "react";

class Author extends Component {
  constructor(props) {
    /**
     * Super est necessaire pour permettre à Author
     * d'accéder à props (props appartient au parent : Component)
     */
    super(props);
    this.afficherNom = this.afficherNom.bind(this);
  }
  afficherNom() {
    alert(this.props.name);
    console.log("clic");
  }
  render() {
    return (
      <button
        type="button"
        onClick={this.afficherNom}
        className="btn btn-primary mt-3"
      >
        Cliquez moi !
      </button>
    );
  }
}

export default Author;
