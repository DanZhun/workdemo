import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';


function Login() {  
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const login = (data) => {
    axios.post('https://todoo.5xcamp.us/users/sign_in', {user:data})
        .then(res => {
        console.log(res.data)
        alert(JSON.stringify(res.data.message));
        localStorage.setItem('token', res.headers.authorization);
        // token = res.headers.authorization
        // console.log(localStorage.getItem('token'))
        navigate('/home')
        })
        .catch(error => {
        alert(JSON.stringify(error.response.data.message));
        });
    }
    return (
    <div id="loginPage" className="bg-yellow">
        <div className="conatiner loginPage vhContainer ">
            <div className="side">
                <a href="#"><img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="" /></a>
                <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg" />
            </div>
            <div>
                <form className="formControls" onSubmit={handleSubmit(login)}>
                    <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
                    <label className="formControls_label" htmlFor="email">Email</label>
                    <input className="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" required {...register("email", { required: true , pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />
                    {errors.email && errors.email.type === "required" && <span>此欄位不可留空</span>}
                    {errors.email && errors.email.type === "pattern" && <span>不符合 Email 規則</span> }
                    <label className="formControls_label" htmlFor="pwd">密碼</label>
                    <input className="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required {...register("password", { required: { value: true, message: "此欄位必填" }, minLength: {value: 6, message:  "密碼至少為 6 碼"}})} />
                    <span>{errors.password?.message}</span>
                    <input className="formControls_btnSubmit" type="submit" value="登入" />
                    <Link className="formControls_btnLink" to="/signup">註冊帳號</Link>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login;