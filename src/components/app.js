import React, {Component} from 'react'
import { connect} from 'react-redux'
import { fetchUsers} from '../actions/index'

class App extends Component{
  componentWillMount(){
    this.props.fetchUsers();
  }
  renderUser({id, name, email}){
    return (
      <li className='list-group-item' key={id}>
        <span className="label label-pill pull-right">
          <a href={email}>{email}</a>
        </span>
        {name}
      </li>
    )
  }
  render(){
    if(!this.props.users){
      return <div>loading...</div>
    }
    return (
      <div>
        <h4>Email Directory</h4>
        <ul className="list-group">
          {this.props.users.map(this.renderUser)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users.users}
}

export default connect(mapStateToProps, {fetchUsers})(App)