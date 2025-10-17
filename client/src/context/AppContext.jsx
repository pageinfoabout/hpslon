import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || '/api'

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [user, setUser] = useState(null)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem('token', token)
      fetchUser()
    } else {
      delete axios.defaults.headers.common.Authorization
      localStorage.removeItem('token')
      setUser(null)
    }
  }, [token])

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/user/data')
      if (data.success) {
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      setUser(null)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  const value = {
    token,
    setToken,
    user,
    setUser,
    showLogin,
    setShowLogin,
    fetchUser,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)