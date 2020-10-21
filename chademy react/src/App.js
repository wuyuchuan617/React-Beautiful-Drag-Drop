// ------------------以下import 套件-------------------------

import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// ------------------以下import common components--------------------

import MyNavbar from './common_components/MyNavbar'
import MainContent from './common_components/MainContent'
import MyFooter from './common_components/MyFooter'

// ---------------------以下import 首頁頁面--------------------

import Home from './home/pages/Home'

// ---------------------以下import 品牌故事頁面----------------

// ---------------------以下import 產品頁面--------------------

// ---------------------以下import 二手頁面--------------------

// ---------------------以下import 募資頁面--------------------

// ---------------------以下import 競標頁面--------------------

// ---------------------以下import 課程頁面--------------------

// ---------------------以下import 部落格頁面------------------

// ---------------------以下import 會員頁面--------------------

// ---------------------以下import 購物車頁面------------------

function App() {
  return (
    <Router>
      <>
        <MyNavbar />

        <MainContent>
          <Switch>
            {/* 首頁頁面 */}

            <Route exact path="/">
              <Home />
            </Route>

            {/* 品牌故事頁面 */}

            <Route exact path="/">
              <Home />
            </Route>

            {/* 產品頁面 */}

            <Route exact path="/counter">
              <Home />
            </Route>

            <Route path="/product/:id?">
              <Home />
            </Route>

            {/* 二手頁面 */}

            <Route exact path="/counterredux">
              <Home />
            </Route>

            {/* 募資頁面 */}

            <Route path="/login">
              <Home />
            </Route>

            {/* 競標頁面 */}

            <Route path="/register">
              <Home />
            </Route>

            {/* 課程頁面 */}

            <Route path="/profile">
              <Home />
            </Route>

            {/* 部落格頁面 */}

            <Route path="/todo">
              <Home />
            </Route>

            {/* 會員頁面 */}

            <Route path="/about">
              <Home />
            </Route>

            {/* 購物車頁面 */}

            <Route path="/productlist">
              <Home />
            </Route>

            {/* 404找不到網頁，需要放在switch路由表最後一個 */}
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </MainContent>

        <MyFooter />
      </>
    </Router>
  )
}

export default App
