import LoginForm from "@/components/LoginForm"

const LoginPage = () => {
  return (
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>Login to your account</h2>
      <LoginForm />
    </div>
  )
}

export default LoginPage
