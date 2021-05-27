import React ,{Component} from 'react';
import Header from "./../partials/Header";
import Footer from "./../partials/Footer";
import JobCard from "./../partials/JobCard";

import "./css/styles.css";



class JobsApply extends Component {

    render() {
        return(
            <div className="flex flex-col min-h-screen overflow-hidden">
                {/*  Site header */}
                <Header type="dashboard" />

                {/*  Page content */}
                <div className="jobsApply__section">
                    <h3 className="jobsApply__section-heading">
                        {this.props.title}
                    </h3>
                    <main className="jobsApply__container flex-grow">
                        {/* <div className="JobsApply__container"> */}
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            {/* <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard /> 
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard /> */}
                            <JobCard />
                            <JobCard />
                        {/* </div> */}
                    </main>
                </div>
                {/*  Site footer */}
                <Footer />

            </div>
        );
    }
} 

export default JobsApply;