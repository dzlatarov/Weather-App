import { Link } from "react-router-dom"
export const NotFoundPage = () => {
  return (
      <div className='errorWrrapper'>
          404 Not Found
          <Link to='/'>Home</Link>
    </div>
  )
}
