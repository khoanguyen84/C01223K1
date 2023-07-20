import './App.css';
import { ThemeContext } from './Context/ThemeContext';
import Content from './components/Content';
import { useContext } from 'react';

// props/children => truyền data từ component cha đến component con
// ComponentA => ComponentB => ComponentC


// useContext
// 1. Tạo ra 1 context - createContext
// 2. Provider
// 3. Consumer

// export const ThemeContext = createContext();

// function App() {
//   const [theme, setTheme] = useState('dark')
//   const handleChangeTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }
//   return (
//     <ThemeContext.Provider value={theme}>
//       <button onClick={handleChangeTheme}>Toggle Theme</button>
//       <Content/>
//     </ThemeContext.Provider>
//   );
// }

function App() {
  const consumer = useContext(ThemeContext)
  return (
    <>
      <button onClick={() => consumer.handleChangeTheme()}>Toggle Theme</button>
      <Content />
    </>
  )
}


export default App;
