import LoginForm from '@/app/(auth)/login/login-form'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className='w-full'>
      <h1 className='text-3xl font-semibold text-center mb-8'>Login</h1>
      <div className='flex justify-center'>
        <LoginForm />
      </div>
      <hr className="my-6 border-gray-300 w-full"></hr>

      <button
        type="button"
        className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
      >
        <div className="flex items-center justify-center">
          <div className="h-6 w-6"> 
          <Image
            src="/google.svg"
            alt=""
            className="h-6 w-6 object-cover"
            objectFit="cover"
            width={24}
            height={24}
          />
          </div>
          <span className="ml-4">Log in with Google</span>
        </div>
      </button>

      <p className="mt-8">
        Need an account?{" "}
        <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
          Create an account
        </a>
      </p>
    </div>
  )
}