const Login = () => {
    return ( 
            <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-opacity-50 to-opacity-50 bg-cover flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
            backgroundPosition: 'center',
        }}>
             <div className="w-[25%] p-[20px] bg-white">
                <h1 className="text-[24px] font-light">SIGN IN</h1>
                <form className="flex flex-col">
                    <input placeholder="username" className="formInput"/>
                    <input placeholder="password" className="formInput"/>
                    <button className="w-[40%] py-[13px] px-[20px] bg-[teal] text-white cursor-pointer mb-[10px] ml-[8px]">LOGIN</button>
                    <a className="link">DO NOT YOU REMEMBER THE PASSWORD?</a>
                    <a className="link">REATE A NEW ACCOUNT</a>
                </form>
             </div>
        </div>
     );
}
 
export default Login;