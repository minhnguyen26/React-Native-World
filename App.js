/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import SignIn from "./App/Container/SignIn/SignIn.tsx"
import {Provider} from "react-redux"
import store from "./App/Redux/CreateStore"
 export default function App() {
    return (
        <Provider store={store}>
            <SignIn>
                
            </SignIn>
        </Provider>
        
    )
}