import React from "react";
import CompanyLogo from "../assets/CompanyLogo.png";
import { RADIO, TEXT } from "../utility/Constant";
import Button from "./Button";

const JobCard = ({
  setShowModal,
  jobTitle,
  companyName,
  industry,
  location,
  remoteType,
  minExperience,
  maxExperience,
  minSalary,
  maxSalary,
  totalEmployee,
  applyType,
}) => {
  const applyNow = () => {
    setShowModal({
      status: true,
      type: RADIO.VALUE_QUICK,
    });
  };
  const externalApply = () => {
    setShowModal({
      status: true,
      type: RADIO.VALUE_EXTERNAL,
    });
  };
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full py-4 px-6 m-auto bg-white rounded-md ring-1 ring-inset ring-[theme('colors.gray')] lg:min-w-[38rem]">
        <div className="flex">
          <span className="mr-2">
            <img src={CompanyLogo} alt="CompanyLogo" />
          </span>
          <div>
            <h2 className="text-2xl font-normal text-[theme('colors.black')]">
              {jobTitle}
            </h2>
            <div>
              <h3 className="text-base font-normal text-[theme('colors.black')]">
                {companyName} - {industry}
              </h3>
              <h3 className="text-base font-normal text-[#7A7A7A]">
                {location} ({remoteType})
              </h3>
            </div>
            <section className="my-6">
              <p className="text-base font-normal py-1 text-[theme('colors.black')]">
                {TEXT.PART_TIME} (9.00 am - 5.00 pm {TEXT.IST})
              </p>
              <p className="text-base font-normal py-1 text-[theme('colors.black')]">
                {TEXT.EXPERIENCE} ({minExperience} - {maxExperience} years)
              </p>
              <p className="text-base font-normal py-1 text-[theme('colors.black')]">
                {TEXT.INR} {minSalary} - {maxSalary} {TEXT.PER_MONTH}
              </p>
              <p className="text-base font-normal py-1 text-[theme('colors.black')]">
                {totalEmployee} {TEXT.EMPLOYEES}
              </p>
            </section>
            <span className="flex gap-6">
              {applyType === RADIO.VALUE_QUICK ? (
                <Button label={TEXT.APPLY_NOW} onClick={applyNow} />
              ) : (
                <Button
                  variant={TEXT.OUTLINED}
                  label={TEXT.EXTERNAL_APPLY}
                  onClick={externalApply}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
