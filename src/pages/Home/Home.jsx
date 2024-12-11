import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
	return (
		<div>
			<Banner/>
			<HotJobs></HotJobs>
		</div>
	);
};

export default Home;