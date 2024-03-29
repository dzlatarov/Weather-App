import './PageNotFound.css'
import { Link } from "react-router-dom"

export const PageNotFound = () => {
  return (
    <section>
        <div className="error-container">
          <div className="text">
          <h1>Page Not Found</h1>
          <h1><Link to='/'>Go Home</Link></h1>
          </div>
          <div><img className="image" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt=""/></div>
        </div>
    </section>
  )
}
