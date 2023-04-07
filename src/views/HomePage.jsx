import { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";
import reducer, {initState}  from '../store/reducer'
function HomePage() {
  const [stt, dispatch] = useReducer(reducer, initState);
  return(
    <>
      <div className="grid-layout">
        <header>
            <h1>This is Header</h1>
        </header>
        <main>
            <Outlet context={[stt, dispatch]}/>
        </main>
        <nav>
            <ul>
              <li>
                <Link to='/'>
                  User
                </Link>
              </li>
              <li>
                <Link to='/todo'>
                  TodoList
                </Link>
              </li>
              
            </ul>
        </nav>
        <footer>
            <h1>This is Footer</h1>
        </footer>
      </div>
    </>
  )
}

export default HomePage;