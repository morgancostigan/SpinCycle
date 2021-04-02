import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React = require('react');

interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
};

const defaultPosts:IPost[] = [];

const App = () => {}

const [posts, setPosts]: [IPost[], posts(IPost[]) => void] = 
React.useState(defaultPosts);

const [loading, setLoading]: [boolean, (loading: boolean) => void] = 
React.useState<boolean>(true);

const [error, setError]: [string, (error: string) => void] = 
React.useState("");

React.useEffect(() => {
  axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
}, []);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
