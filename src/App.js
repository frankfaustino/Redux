import React, { Component } from 'react'
import { connect } from 'react-redux'

import { toggleMenu, itemsFetchData } from './actions'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

  render() {
    const { toggleMenu, showMenu, items: stuff, hasErrored, isLoading } = this.props
    const loaded = toggleMenu ? 'show' : 'hidden'

    if (hasErrored) return <p>Error loading items</p>
    if (isLoading) return <p>Loading...</p>
    return (
      <div className="App">
        <header className={`App-header ${loaded}`}>
          <ul>{stuff.map(item => <li key={item.id}>{item.label}</li>)}</ul>
        </header>
        <button id="roundButton" onClick={showMenu} />
        <div className="container" />
        <div className="container-2" />
      </div>
    )
  }
}

/* ——— maps state to an object of props ——— */
const mapStateToProps = (state) => {
  return {
    toggleMenu: state.toggleMenu,
    items: state.items,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading,
  }
}

/* ——— enables dispatching of itemsFetchData action creator w/ prop ——— */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url)),
    showMenu: () => dispatch(toggleMenu())
  }
}

/* ——— connects App to Redux while mapping props for use ——— */
export default connect(mapStateToProps, mapDispatchToProps)(App)
