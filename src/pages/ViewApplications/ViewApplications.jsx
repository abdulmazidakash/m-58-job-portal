import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplications = () => {


	const applications = useLoaderData();
	// console.log(applications);

	const handleStatusUpdate =( e, id) =>{
		console.log(e.target.value, id);

		const data = {
			status: e.target.value

		}
		fetch(`https://y-red-iota.vercel.app/job-applications/${id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(data => {
				// console.log(data);
					// console.log(data);
					if(data.modifiedCount){
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Status has been updated',
							showConfirmButton: false,
							timer: 1500
						})
					}
			})
	}
	return (
		<div>
			<h2>view applications: {applications.length} </h2>
			<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
      {
	  	applications.map((app, index) =>
			<tr key={app._id}>
			  <th>{index + 1}</th>
			  <td>{app.application_email}</td>
			  <td>Quality Control Specialist</td>
			  <td>
			  <select
			  onChange={(e) => handleStatusUpdate(e, app._id)}
			  defaultValue={app.status || 'change status'} 
			  className="select select-bordered select-xs w-full max-w-xs">
					<option disabled>Change Status</option>
					<option>Under Review</option>
					<option>Set Interview</option>
					<option>Hired</option>
					<option>Rejected</option>
				</select>
			  </td>
			</tr>)
	  }


    </tbody>
  </table>
</div>
		</div>
	);
};

export default ViewApplications;