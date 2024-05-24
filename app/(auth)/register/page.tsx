import RegisterForm from "./register-form";

export default function RegisterPage(){
    return <div className='w-full'>
    <h1 className='text-3xl font-semibold mb-8'>Register</h1>
    <div className='flex justify-center'>
      <RegisterForm/>
    </div>
  </div>
}