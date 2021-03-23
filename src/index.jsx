import React from 'react'
import Post from '@models/Post'
import WebpackLogo from '@/assets/webpack-logo'
import {render} from 'react-dom'
import './babel'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', WebpackLogo)


const App = () => (
  <div className="container">
    <h1>Webpack Coursesssss</h1>
    <div className="logo" />
    <hr/>
    <div className="box">
      <h2>LESS</h2>
    </div>
    <div className="card">
      <h2>SCSS</h2>
    </div>
    <hr />
    <pre/>
  </div>
)

render(<App/>, document.getElementById('app'))
