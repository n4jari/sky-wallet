import { useRouteError } from 'react-router-dom'
const NotFound = () => {
  const error = useRouteError()
  return (
    <>
      <p>صفحه مورد نظر یافت نشد.</p>
      <p>
        <i>
          {error.statusText || error.message}
        </i>
      </p>
    </>
  )
}

export default NotFound