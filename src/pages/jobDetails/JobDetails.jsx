import { useLoaderData } from "react-router-dom";


const JobDetails = () => {

	const {title} = useLoaderData();

	return (
		<div>
			job details for {title}
		</div>
	);
};

export default JobDetails;