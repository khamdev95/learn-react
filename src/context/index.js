import Content from "./Content";
import { useContext } from 'react';
import { ThemeContext } from './../ThemeContext'
function CompA() {
    const {handleToggleTheme} = useContext(ThemeContext)
  return (
    <div>
      <button onClick={handleToggleTheme}>Toggle theme</button>
      <br></br>
      <Content />
    </div>
  );
}
export default CompA;
