import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

	const {title, company, deadline} = useLoaderData();
	// console.log(data);

	return (
		<div>
			<h2>job details for {title}</h2>
			<p>apply for: {company}</p>
			<p>deadline: {deadline}</p>
			<button className="btn btn-accent">Apply Now</button>
		</div>
	);
};

export default JobDetails;