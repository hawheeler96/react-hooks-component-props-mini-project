import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About'
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name='You better work bitch'/>
      <About image='https://i.pinimg.com/736x/39/fd/4c/39fd4c3644b0a64c00fe1486670647f9.jpg' about='This is a website'/>
      <ArticleList />
    </div>
  );
}

export default App;
