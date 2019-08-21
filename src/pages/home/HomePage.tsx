import React, { Component } from 'react';

import PhdCard from "../../components/Card/Card";
import PhdInput from "../../components/PhdInput/PhdInput";
import Counter from '../../components/Counter/Counter';

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Counter></Counter>
        home
        <PhdInput></PhdInput>
        <PhdCard></PhdCard>
      </div>
    )
  };
}

export default HomePage;
