import { object } from 'motion/react-client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddJob = () => {

  const navigate = useNavigate();

  const handleAddJob = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newJob} = initialData;
    console.log(min, max, currency, newJob);
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split('\n');
    newJob.responsibility = newJob.responsibility.split('\n')
    console.log(newJob);

    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
      .then(res => res.json())
      .then(data =>{
        // console.log(data);
        if(data.insertedId){
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: 'Job has been added',
						showConfirmButton: false,
						timer: 1500
					});
          navigate('/myPostedJobs')
				}
      })
  }
	return (
		<div>
			<h2 className="text-3xl text-center">Add a job</h2>
			<form onSubmit={handleAddJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job title</span>
          </label>
          <input type="text" name='title' placeholder="Job title" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />
        </div>
        {/* job type  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select defaultValue='Pick a job type' className="select select-ghost w-full max-w-xs">
            <option disabled >Pick a job type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* job type  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select defaultValue='Pick a job field' className="select select-ghost w-full max-w-xs">
            <option disabled >Pick a job field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salary range  */}
        <p className='font-semibold'>Salary Range</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className="form-control">

            <input type="text" name='min' placeholder="min" className="input input-bordered" required />
          </div>
          <div className="form-control">

            <input type="text" name='max' placeholder="max" className="input input-bordered" required />
          </div>

          {/* currency  */}
          <div className="form-control">

          <select defaultValue='Pick a job field'  name='currency' className="select select-ghost w-full max-w-xs">
            <option disabled >Pick a job field</option>
            <option>bdt</option>
            <option>usd</option>
            <option>inr</option>

          </select>
        </div>

        {/* //job description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job description</span>
          </label>
          <textarea 
          className='textarea textarea-bordered w-full' 
          name="description" 
          id="" 
          placeholder='put each requirement in a line'></textarea>
        </div>
        {/* //job responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibility</span>
          </label>
          <textarea 
          className='textarea textarea-bordered w-full' 
          name="responsibility" 
          id="" 
          placeholder='write each responsibility in a line'

          ></textarea>
        </div>

        {/* company name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <textarea 
          className='textarea textarea-bordered'
          placeholder='put each requirements in a new line'
          ></textarea>
        </div>

        {/* requirements  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <input type="text" name='requirements' placeholder="company name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input type="email" name='hr_email' placeholder="HR Email" className="input input-bordered" required />
        </div>
        {/* //application deadline  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">company logo url</span>
          </label>
          <input type="text" name='company_logo_url' placeholder="company logo url" className="input input-bordered" required />
        </div>

        {/* submit button  */}


        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>

		</div>
	);
};

export default AddJob;