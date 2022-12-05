import logo from './logo.png';
// import { useEffect, useState } from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([])
  // const url = 'htt/ps://jsonplaceholder.typicode.com/posts';
  const url2 = 'http://localhost:4000/';
  // const url3 = '../../api/app.js';

  useEffect( () => {
    // fetch(url)
    fetch(url2)
      .then( res =>  res.json())
      .then( data => setBlogs(data))
      // console.log(blogs)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={logo} className="App-logo" alt="logo" />
        </a>
        <h1 className="blog">FK Blog</h1>
        <ul className="nav">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/" className="nav-link">Blog</a></li>
          <li><a href="/" className="nav-link">Projects</a></li>
        </ul>
      </header>

      <main className="blog-list">
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              {blog.title}
              <p>
                {blog.body && blog.body}
              </p>
            </li>

          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
