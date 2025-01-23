'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'D:/repos/AI technical Interview/lib/firebaseConfig.js'
import Link from 'next/link'

export default function FreeTrial() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState('signin')

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const email = form.email.value
    const password = form.password.value

    setLoading(true)
    setMessage('Signing you in...')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setMessage('Successfully signed in! Redirecting...')
      window.location.href = 'https://speachtotextpy-lxw3itxugmnyfumqe5jdg6.streamlit.app/'
    } catch (error) {
      console.error('Error signing in:', error)
      setMessage('Error signing in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const fullName = form.fullName.value
    const email = form.email.value
    const password = form.password.value

    setLoading(true)
    setMessage('Creating your account...')

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setMessage('Successfully signed up! You can now sign in.')
      form.reset()
    } catch (error) {
      console.error('Error signing up:', error)
      setMessage('Error signing up. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <Link href="/" className="text-4xl font-bold text-gray-900 cursor-pointer">
          AI INTERVIEW
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Start your free trial
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('signin')}
              className={`w-full py-2 font-medium ${activeTab === 'signin' ? 'bg-gray-200' : 'bg-white'}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`w-full py-2 font-medium ${activeTab === 'signup' ? 'bg-gray-200' : 'bg-white'}`}
            >
              Sign Up
            </button>
          </div>

          {activeTab === 'signin' && (
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div>
                <label htmlFor="signin-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="signin-email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 border rounded p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="signin-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="signin-password"
                  type="password"
                  name="password"
                  required
                  className="mt-1 border rounded p-2 w-full"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#3A648C] text-white hover:bg-[#2A547C] py-2 rounded"
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            </form>
          )}

          {activeTab === 'signup' && (
            <form className="space-y-6" onSubmit={handleSignUp}>
              <div>
                <label htmlFor="signup-fullname" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="signup-fullname"
                  type="text"
                  name="fullName"
                  required
                  className="mt-1 border rounded p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 border rounded p-2 w-full"
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  name="password"
                  required
                  className="mt-1 border rounded p-2 w-full"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#3A648C] text-white hover:bg-[#2A547C] py-2 rounded"
                >
                  Sign Up
                </button>
              </div>
            </form>
          )}

          {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
        </div>
      </div>
    </div>
  )
}

