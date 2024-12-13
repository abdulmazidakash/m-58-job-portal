import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {

	const {_id, title, company, deadline} = useLoaderData();
	// console.log(data);

	return (
		<div>
			<h2>job details for {title}</h2>
			<p>apply for: {company}</p>
			<p>deadline: {deadline}</p>
			<Link to={`/jobApply/${_id}`}>
				<button className="btn btn-accent">Apply Now</button>
			</Link>
		</div>
	);
};

export default JobDetails;