"use client";
import store from '@/redux-store/store/store'
import React from 'react'
import { Provider } from 'react-redux'



const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <Provider store={store}>{children}</Provider>
    </div>
  )
}

export default ReduxProvider