import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";


const HotJobs = () => {

	const [jobs, setJobs] = useState([]);
	
	useEffect(()=>{
		fetch('https://y-red-iota.vercel.app/jobs')
			.then(res => res.json())
			.then(data =>{
				setJobs(data);
			})
	}, [])
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
				{
					jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
				}
			</div>
		</div>
	);
};

export default HotJobs;