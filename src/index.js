import * as $ from 'jquery'
import Post from '@models/Post'
import json from '@/assets/json'
import WebpackLogo from '@/assets/webpack-logo'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

console.log('Post to String: ', post.toString())

// console.log('jsons: ', json)
// console.log('XML', xml)
// console.log('csv', csv)