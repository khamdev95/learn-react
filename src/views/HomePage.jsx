import { Outlet } from "react-router-dom";

function HomePage() {
  return(
    <>
      <div className="grid-layout">
        <header>
            <h1>This is Header</h1>
        </header>
        <main>
            <Outlet/>
        </main>
        <nav>
            <ul>
              <li>
              <a href="/">Home</a>
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