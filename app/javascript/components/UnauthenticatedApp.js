import React from "react"
import PropTypes from "prop-types"
import Apartments from './pages/Apartments'


class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <div>Unauthenticated</div>
      <Apartments />
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp
