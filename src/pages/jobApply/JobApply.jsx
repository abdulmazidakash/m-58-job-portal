import { useParams } from "react-router-dom";


const JobApply = () => {

	const {id} = useParams()
	console.log(id);

	const submitJobApplication = e =>{
		e.preventDefault();

		const form = e.target;
		const linkedIn = form.linkedIn.value;
		const github = form.github.value;
		const resume = form.resume.value;

		console.log(linkedIn, github, resume);
	}
	return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Login now!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
						quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<form onSubmit={submitJobApplication} className="card-body">
						<div className="form-control">
						<label className="label">
							<span className="label-text">LinkedIn URL</span>
						</label>
						<input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
						</div>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Github URL</span>
						</label>
						<input type="url" name="github" placeholder="Github URL" className="input input-bordered" required />
						</div>
						<div className="form-control">
						<label className="label">
							<span className="label-text">Resume URL</span>
						</label>
						<input type="url" name="resume" placeholder="Resume URL" className="input input-bordered" required />
						</div>
						<div className="form-control mt-6">
						<button className="btn btn-primary">Login</button>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobApply;