const Register = () => {
    return ( 
        <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-opacity-50 to-opacity-50 bg-cover flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
            backgroundPosition: 'center',
        }}>
             <div className="w-[40%] p-[20px] bg-white">
                <h1 className="text-[24px] font-light">CREATE AN ACCOUNT</h1>
                <form className="flex flex-wrap">
                    <input placeholder="name" className="formInput"/>
                    <input placeholder="last name" className="formInput"/>
                    <input placeholder="username" className="formInput"/>
                    <input placeholder="email" className="formInput"/>
                    <input placeholder="password" className="formInput"/>
                    <input placeholder="confirm password" className="formInput"/>
                    <span className="text-[12px] my-[20px]">
                    By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button className="w-[40%] py-[13px] px-[20px] bg-[teal] text-white cursor-pointer">CREATE</button>
                </form>
             </div>
        </div>
     );
}
 
export default Register;