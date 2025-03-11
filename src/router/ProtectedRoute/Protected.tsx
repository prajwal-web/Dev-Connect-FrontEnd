import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Outlet, useNavigate } from 'react-router'

const Protected = () => {
  const navigate = useNavigate()
  const [cookies] = useCookies(['name'])
  useEffect(() => {
    if (!cookies.name) {
      navigate('/')
    }
  }, [cookies, navigate])
  return (
    <>
      <Outlet />
    </>
  )
}

export default Protected