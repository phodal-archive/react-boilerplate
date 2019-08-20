import React, { Component } from 'react';
import PhdCard from "../../components/card/Card";
import PhdInput from "../../components/PhdInput/PhdInput";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        home
        <PhdInput></PhdInput>
        <PhdCard></PhdCard>
      </div>
    )
  };
}

export default HomePage;
