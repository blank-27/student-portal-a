import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";

import SvgIcon from "../components/SvgIcon";

const getJobDetails = async (id) => {
  try {
    const data = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: "get",
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    }).then((val) => val.json());

    console.log("data", data);

    return data;
  } catch (err) {
    console.error("Error in getting Job Details", err);
  }
};

const applyForJob = async (id) => {
  // console.log("applying", id);
  try {
    const data = await fetch(`http://localhost:5000/jobs/${id}/apply`, {
      method: "post",
      headers: {
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("token")).token,
      },
    }).then((val) => {
      alert("Successfully Applied!!");
      val.json();
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.error("Error in applying for Job", err);
  }
};

class JobProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      jobDetails: { company: {} },
    };
  }

  componentDidMount() {
    const url = window.location.pathname;
    const jobId = url.replace("/jobs/", "");
    // this.setState({id:ret});

    getJobDetails(jobId).then((val) => {
      this.setState({
        jobDetails: val,
        id: jobId,
      });
    });
  }

  render() {
    return (
      <div className="flex flex-col overflow-hidden">
        <div className="jobProfile">
          <div className="jobProfile__section-1">
            <div className="company-image-container">
              <SvgIcon src="logo.png" classname="company-logo" />
            </div>
            <hr style={{ border: "1px solid darkgrey", width: "90%" }} />
            <div className="company-details-container">
              <p className="company-name">
                <a
                  href={this.state.jobDetails.company.companyWebsite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {this.state.jobDetails.company.companyName}

                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="ml-2 website-arrow-icon"
                  />
                </a>
              </p>
              <hr style={{ border: "1px solid darkgrey", width: "90%" }} />
              <p className="company-sector">
                {this.state.jobDetails.company.companySector}
                IT Company
              </p>
              <hr style={{ border: "1px solid darkgrey", width: "90%" }} />
              <p className="company-headquarters">
                {this.state.jobDetails.company.companyHeadquarters}
                <span className="description-titles">
                  Company Headquarters :
                </span>{" "}
                Choclate State, Dairy building, Silicon valley, New York 200001.
              </p>
            </div>
          </div>
          <div className="jobProfile__section-2">
            <p className="job-id">{this.state.jobDetails.jobId}</p>
            <br />
            <div className="job-description">
              <p>
                <span className="description-titles">Job Description : </span>
                {this.state.jobDetails.jobDescription}
              </p>
              <p>
                <span className="description-titles">Expected Skills : </span>
                {this.state.jobDetails.qualifications}
                berste Ziel unseres Unternehmens ist die Zufriedenheit unserer
                Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen
                Koordination dieser Bestellung hinter den Kulissen wollen wir
                stets flexibel, agil und zielgerichtet auftreten. Daher lautet
                eines unserer zentralen Führungsprinzipien "Im Zweifel:
                Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die
              </p>
              <p>
                <span className="description-titles">
                  Your role as {this.state.jobDetails.jobDescription} :{" "}
                </span>
                {this.state.jobDetails.jobRole}
                berste Ziel unseres Unternehmens ist die Zufriedenheit unserer
                Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen
                Koordination dieser Bestellung hinter den Kulissen wollen wir
                stets flexibel, agil und zielgerichtet auftreten. Daher lautet
                eines unserer zentralen Führungsprinzipien "Im Zweifel:
                Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die
              </p>
              <p>
                <span className="description-titles">
                  About Company and more info :{" "}
                </span>
                {this.state.jobDetails.company.aboutCompany}
                berste Ziel unseres Unternehmens ist die Zufriedenheit unserer
                Kunden. Vom Moment der Online-Bestellung bis zur reibungslosen
                Koordination dieser Bestellung hinter den Kulissen wollen wir
                stets flexibel, agil und zielgerichtet auftreten. Daher lautet
                eines unserer zentralen Führungsprinzipien "Im Zweifel:
                Handeln"! Wir möchten, dass unsere Teams zusammenarbeiten, die
              </p>
            </div>
          </div>
          <div className="jobProfile__section-3">
            <p>
              <span className="description-titles">Package :</span>{" "}
              {this.state.jobDetails.package}
            </p>
            <p>
              <span className="description-titles">Location :</span>{" "}
              {this.state.jobDetails.postingLocation}
            </p>
            <p>
              <span className="description-titles">Min CGPA :</span>{" "}
              {this.state.jobDetails.minCgpa}
            </p>
            <p>
              <span className="description-titles">Max Backlog :</span>{" "}
              {this.state.jobDetails.maxBacklogsAllowed}
            </p>
            <p>
              <span className="description-titles">Is Only for Female :</span>{" "}
              {this.state.jobDetails.onlyForFemales ? "Yes" : "No"}
            </p>
            <p>
              <span className="description-titles">Eligibile :</span>{" "}
              {this.state.jobDetails.isStudentEligible ? "Yes" : "No"}
            </p>
            {this.state.jobDetails.isStudentEligible ? null : (
              <p>
                <span className="description-titles">
                  Ineligibility Reason :
                </span>{" "}
                {this.state.jobDetails.inEligibilityReason}
              </p>
            )}
            <p>
              <span className="description-titles">Last date to apply :</span>
              <br />
              {moment(this.state.jobDetails.deadlineDate).format(
                "DD-MM-YYYY hh:mm A"
              )}
            </p>
            <p className="apply-button-container">
              {this.state.jobDetails.isStudentEligible ? (
                <Link
                  to="/home"
                  className="btn text-gray-100 bg-green-600 hover:bg-green-800"
                >
                  <span onClick={() => applyForJob(this.state.id)}>Apply</span>
                </Link>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default JobProfile;
