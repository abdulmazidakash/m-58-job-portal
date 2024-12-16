import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import lottieLogin from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignIn = () => {

	const { signInUser } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	console.log('in signIn page', location)


	const handleSignIn = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log('Signing in with:', email, password);

		signInUser(email, password)
			.then(result => {
				// console.log(result);

				console.log('sign in successful', result.user.email);
				// ইউজারকে রিডিরেক্ট করা হচ্ছে
				 const from = location.state?.from || '/';  // 'from' পাথ নিশ্চিত করা হচ্ছে
				 navigate(from);
				const user = { email: email }
				axios.post('https://y-red-iota.vercel.app/jwt', user, 
					{
						withCredentials: true
					}
				)
					.then(res => {
						console.log(res.data);
					})
			})

			.catch(error => {
				console.log('Login error:', error);
				alert('Login failed, please try again.');
			});
	};

	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left w-96">
						<Lottie animationData={lottieLogin}></Lottie>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<h1 className="text-5xl font-bold ml-8 mt-4">Sign In now!</h1>
						<form onSubmit={handleSignIn} className="card-body">

							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="email" name='email' placeholder="email" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name='password' placeholder="password" className="input input-bordered" required />
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Sign In</button>
							</div>
						</form>
						<SocialLogin></SocialLogin>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;