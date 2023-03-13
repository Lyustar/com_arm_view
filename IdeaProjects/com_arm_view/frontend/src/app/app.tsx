// @ts-ignore
import React from 'react';
import { Component } from 'react';
import AppMenu from '../app-menu/app-menu';
import AppHeader from '../app-header/app-header';
import AppBody from "../app-body/app-body";

import './app.css';

export default function App()  {
/*    constructor(props) {
        super(props);
        this.init();
    }
    init() {
        return "";
    }*/
  //render() {
    return (<>
                <div className="App">
                    <header>
                      <AppMenu/>
                      <AppHeader/>
                    </header>
                  <AppBody/>
                </div>
            </>
    );
  //}
};

