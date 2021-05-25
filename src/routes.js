import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Login from './Pages/Login'
import Add from './Pages/Add'

export const Routes = () => {
    return (
        <Switch>
            <Route path = "/" exact component = {Home} />
            <Route path = "/about" exact component = {About} />
            <Route path = "/project" exact component = {Project} />
            <Route path = "/login" exact component = {Login} />
            <Route path = "/add" exact component = {Add} />
        </Switch>
    )
}
