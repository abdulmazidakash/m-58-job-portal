import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";


const HotJobCard = ({job}) => {

	const { title, company, company_logo, requirements, description, location, salaryRange} = job;
	return (
		<div>
			<div className="card card-compact bg-base-100 shadow-xl mt-8">
				<div className="flex gap-2 m-2">
				<figure>
					<img
					src={company_logo}
					alt="Shoes" />
				</figure>
				<div>
					<h4 className="text-2xl">{company}</h4>
					<p className="flex gap-1 items-center"><FaMapMarkerAlt ></FaMapMarkerAlt>{location}</p>
				</div>
				</div>
				<div className="card-body">
					<h2 className="card-title">{title}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<p>{description}</p>
					<div className="flex gap-2 flex-wrap text-center px-2 hover:text-yellow-300 hover:bg-gray-400">
						{
							requirements.map(skill => <p className="border rounded-md">{skill}</p>)
						}
					</div>
					<div className="card-actions justify-end items-center mt-4">
						<p className="flex items-center">salary: <FaDollarSign></FaDollarSign> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
					<button className="btn btn-primary">Apply</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotJobCard;