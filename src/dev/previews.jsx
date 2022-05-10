import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Login from "../Components/login";
import FormPage from "../Components/CompanySignUp";
import App from "../App";
import Home from "../Components/Home";
// import Navigation from "../Components/Navigation";
import SignUp from "../Components/CompanySignUp";
import Dashboard from "../Components/Dashboard";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
            <ComponentPreview path="/FormPage">
                <FormPage/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Home">
                <Home/>
            </ComponentPreview>
            {/*<ComponentPreview path="/Navigation">*/}
            {/*    <Navigation/>*/}
            {/*</ComponentPreview>*/}
            <ComponentPreview path="/SignUp">
                <SignUp/>
            </ComponentPreview>
            <ComponentPreview path="/Dashboard">
                <Dashboard/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;