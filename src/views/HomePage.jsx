import { Outlet } from "react-router-dom";

function HomePage() {

  return(
    <>
      <div className="grid-layout">
        <header>
            <h1>Todo App</h1>
        </header>
        <main>
            <Outlet/>
        </main>
        <nav>
            <ul>
              <li>
              <a href="/">Home</a>
              </li>
              <li>
                <a href="/create-todo">Create Todo</a>
              </li>
            </ul>
        </nav>
        <footer>
            <h1>This Footer</h1>
        </footer>
      </div>
    </>
  )
}

export default HomePage;