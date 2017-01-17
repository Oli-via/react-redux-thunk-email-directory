/**
 * Created by aliyy on 2017/1/15.
 */
import React from 'react'

const INITIAL_STATE = {users: []}

export default (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case 'FETCH_PROFILES' :
      return {...state, users: action.payload}
    default:
      return state
  }
}