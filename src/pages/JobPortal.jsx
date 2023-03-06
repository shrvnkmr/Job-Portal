import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import CreateForm from "../components/CreateForm";
import JobCard from "../components/JobCard";
import Modal from "../components/Modal";
import axios from "../api/ApiUtils";
import { TEXT } from "../utility/Constant";

const JobPortal = () => {
  const [jobList, setJobList] = useState([]);
  const [jobCreated, setJobCreated] = useState({});
  const [showModal, setShowModal] = useState({
    status: false,
    type: null,
  });

  const createJob = () => {
    setShowModal({
      status: true,
      type: null,
    });
  };

  useEffect(() => {
    axios
      .get("/jobs")
      .then((response) => {
        setJobList(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [jobCreated]);

  return (
    <>
      <div className="min-h-screen bg-[theme('colors.gray')]">
        <div className="m-10 absolute float-right">
          <Button onClick={createJob} label={TEXT.CREATE_JOB} />
        </div>
        <div className="flex flex-wrap justify-between mx-10 py-[4.5rem]">
          {jobList.map((job) => {
            return (
              <span className="my-10">
                <JobCard
                  jobTitle={job?.jobTitle}
                  companyName={job?.companyName}
                  industry={job?.industry}
                  location={job?.location}
                  remoteType={job?.remoteType}
                  minExperience={job?.minExperience}
                  maxExperience={job?.maxExperience}
                  minSalary={job?.minSalary}
                  maxSalary={job?.maxSalary}
                  totalEmployee={job?.totalEmployee}
                  setShowModal={setShowModal}
                />
              </span>
            );
          })}
        </div>
      </div>
      {showModal.status ? (
        <Modal setShowModal={setShowModal}>
          <CreateForm
            modalStatus={showModal}
            setShowModal={setShowModal}
            setJobCreated={setJobCreated}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default JobPortal;
