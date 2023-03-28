import {Link, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const signUp = (data) => {
        { /* 練習區 */ }
        axios.post('', {user:data})
            .then(res => {
            console.log(res.data)
            alert(JSON.stringify(res.data.message))
            navigate('/')
            // alert(`回傳結果：${JSON.stringify(res.data)}`);
            })
            .catch(error => {
            alert(JSON.stringify(error.response.data.message)+JSON.stringify(error.response.data.error[0]));
            });
    }
    return (
    <div id="signUpPage" className="bg-yellow">
        <div className="conatiner signUpPage vhContainer">
            <div className="side">
                <a href="#"><img className="logoImg" src="https://upload.cc/i1/2022/03/23/rhefZ3.png" alt="" /></a>
                <img className="d-m-n" src="https://upload.cc/i1/2022/03/23/tj3Bdk.png" alt="workImg" />
            </div>
            <div>
                <form className="formControls" onSubmit={handleSubmit(signUp)}>
                    <h2 className="formControls_txt">註冊帳號</h2>
                    <label className="formControls_label" htmlFor="email">Email</label>
                    <input className="formControls_input" type="text" id="email" name="email" placeholder="請輸入 email" required {...register("email", { required: true , pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} />
                    {errors.email && errors.email.type === "required" && <span>此欄位不可留空</span>}
                    {errors.email && errors.email.type === "pattern" && <span>不符合 Email 規則</span> }
                    <label className="formControls_label" htmlFor="name">您的暱稱</label>
                    <input className="formControls_input" type="text" name="name" id="name" placeholder="請輸入您的暱稱" required {...register("nickname", { required: { value: true, message: "此欄位必填" }})}/>
                    <span>{errors.nickname?.message}</span>
                    <label className="formControls_label" htmlFor="pwd">密碼</label>
                    <input className="formControls_input" type="password" name="pwd" id="pwd" placeholder="請輸入密碼" required {...register("password", { required: { value: true, message: "此欄位必填" }, minLength: {value: 6, message:  "密碼至少為 6 碼"}})} />
                    <span>{errors.password?.message}</span>
                    <label className="formControls_label" htmlFor="pwd">再次輸入密碼</label>
                    <input className="formControls_input" type="password" name="pwd2" id="pwd2" placeholder="請再次輸入密碼" required {...register("pwd2", { 
                            required: {value : true, message: "此欄位不可留空"}, 
                            validate: (value) => {
                            if (watch('password') !== value) {
                              return "兩次密碼輸入不同";
                            }
                          } })} />
                    <span>{errors.pwd2?.message}</span>
                    <input className="formControls_btnSubmit" type="submit" value="註冊帳號" />
                    <Link className="formControls_btnLink" to="/">登入</Link>
                </form>
            </div>
        </div>
    </div>
    )
}

export default SignUp;