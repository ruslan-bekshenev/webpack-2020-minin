import Post from './Post'
import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo.png'

import './styles/style.css'
const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to String: ', post.toString())

console.log('jsons: ', json)