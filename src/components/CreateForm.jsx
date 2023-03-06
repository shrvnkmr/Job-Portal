import React, { useEffect, useState } from "react";
import { ERROR, LABEL, PLACEHOLDER, RADIO, TEXT } from "../utility/Constant";
import Button from "./Button";
import InputBox from "./InputBox";
import MultiInputField from "./MultiInputField";
import RadioInput from "./RadioInput";
import axios from "../api/ApiUtils";

const CreateForm = ({ modalStatus, setShowModal, setJobCreated }) => {
  const [nextStep, setNextStep] = useState(false);
  const [startErrorHandling, setStartErrorHandling] = useState(false);
  const [jobTitleInvalid, setJobTitleInvalid] = useState(false);
  const [companyNameInvalid, setCompanyNameInvalid] = useState(false);
  const [industryInvalid, setIndustryInvalid] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remoteType: "",
    minExperience: "",
    maxExperience: "",
    minSalary: "",
    maxSalary: "",
    totalEmployee: "",
    applyType: modalStatus?.type || "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const saveForm = (e) => {
    e.preventDefault();
    axios
      .post("/jobs", formData)
      .then((response) => {
        setJobCreated(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setShowModal({
      status: false,
      type: formData?.applyType,
    });
  };

  const onNextClick = (e) => {
    e.preventDefault();
    setStartErrorHandling(true);
    if (formData?.jobTitle && formData?.companyName && formData?.industry) {
      setNextStep(true);
    }
  };

  useEffect(() => {
    if (startErrorHandling) {
      setJobTitleInvalid(formData?.jobTitle ? false : true);
      setCompanyNameInvalid(formData?.companyName ? false : true);
      setIndustryInvalid(formData?.industry ? false : true);
    }
  }, [startErrorHandling, formData]);

  const StepOne = (
    <form className="mt-6">
      <div className="mb-6">
        <InputBox
          label={LABEL.JOB_TITLE}
          placeholder={PLACEHOLDER.JOB_TITLE}
          name="jobTitle"
          value={formData?.jobTitle}
          className="w-full"
          onChange={handleChange}
          required={true}
          isInvalid={jobTitleInvalid}
          errorText={ERROR.JOB_TITLE_ERROR}
        ></InputBox>
      </div>
      <div className="mb-6">
        <InputBox
          label={LABEL.COMPANY_NAME}
          placeholder={PLACEHOLDER.COMPANY_NAME}
          name="companyName"
          value={formData?.companyName}
          className="w-full"
          onChange={handleChange}
          required={true}
          isInvalid={companyNameInvalid}
          errorText={ERROR.COMPANY_NAME_ERROR}
        ></InputBox>
      </div>
      <div className="mb-6">
        <InputBox
          label={LABEL.INDUSTRY}
          placeholder={PLACEHOLDER.INDUSTRY}
          name="industry"
          value={formData?.industry}
          className="w-full"
          onChange={handleChange}
          required={true}
          isInvalid={industryInvalid}
          errorText={ERROR.INDUSTRY_ERROR}
        ></InputBox>
      </div>
      <span className="flex flex-row justify-between">
        <div className="mb-6 flex gap-6 max-[576px]:block">
          <InputBox
            label={LABEL.LOCATION}
            placeholder={PLACEHOLDER.LOCATION}
            name="location"
            value={formData?.location}
            className="w-[244px]"
            onChange={handleChange}
          ></InputBox>
          <InputBox
            label={LABEL.REMOTE_TYPE}
            name="remoteType"
            placeholder={PLACEHOLDER.REMOTE_TYPE}
            value={formData?.remoteType}
            className="w-[244px]"
            onChange={handleChange}
          ></InputBox>
        </div>
      </span>
      <div className="mt-24 float-right">
        <Button
          label={LABEL.NEXT}
          onClick={(e) => onNextClick(e)}
          disabled={false}
        />
      </div>
    </form>
  );

  const StepTwo = (
    <form className="mt-6">
      <span className="flex flex-row justify-between">
        <div className="mb-6">
          <InputBox
            label={LABEL.EXPERIENCE}
            name="minExperience"
            placeholder={PLACEHOLDER.MIN}
            value={formData?.minExperience}
            className="w-[244px]"
            onChange={handleChange}
            variant={TEXT.MULTI_VARIANT}
            children={
              <MultiInputField
                name="maxExperience"
                placeholder={PLACEHOLDER.MAX}
                value={formData?.maxExperience}
                className="w-[244px]"
                onChange={handleChange}
              ></MultiInputField>
            }
          ></InputBox>
        </div>
      </span>
      <span className="flex flex-row justify-between">
        <div className="mb-6">
          <InputBox
            label={LABEL.SALARY}
            name="minSalary"
            placeholder={PLACEHOLDER.MIN}
            value={formData?.minSalary}
            className="w-[244px]"
            onChange={handleChange}
            variant={TEXT.MULTI_VARIANT}
            children={
              <MultiInputField
                name="maxSalary"
                placeholder={PLACEHOLDER.MAX}
                value={formData?.maxSalary}
                className="w-[244px]"
                onChange={handleChange}
              ></MultiInputField>
            }
          ></InputBox>
        </div>
      </span>
      <div className="mb-6">
        <InputBox
          label={LABEL.TOTAL_EMPLOYEE}
          name="totalEmployee"
          placeholder={PLACEHOLDER.TOTAL_EMPLOYEE}
          value={formData?.totalEmployee}
          className="w-[244px]"
          onChange={handleChange}
        ></InputBox>
      </div>
      <div className="mb-6">
        <label>
          <span className="text-gray-800 font-medium">{LABEL.APPLY_TYPE}</span>
          <div className="flex gap-4">
            <RadioInput
              label={LABEL.QUICK_APPLY}
              id="type-quick-apply"
              name="applyType"
              value={RADIO.VALUE_QUICK}
              checked={formData?.applyType === RADIO.VALUE_QUICK}
              onChange={handleChange}
            ></RadioInput>
            <RadioInput
              label={LABEL.EXTERNAL_APPLY}
              id="type-external-apply"
              name="applyType"
              value={RADIO.VALUE_EXTERNAL}
              checked={formData?.applyType === RADIO.VALUE_EXTERNAL}
              onChange={handleChange}
            ></RadioInput>
          </div>
        </label>
      </div>
      <div className="mt-24 float-right">
        <Button
          label={LABEL.SAVE}
          onClick={(e) => saveForm(e)}
          disabled={false}
        />
      </div>
    </form>
  );

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-8 m-auto bg-white rounded-md ring-1 ring-inset ring-[theme('colors.gray')] lg:max-w-[577px]">
        <span className="flex justify-between">
          <h1 className="text-xl font-sans text-left">{TEXT.MODAL_TITLE}</h1>
          <h2 className="text-lg font-sans text-right">
            {nextStep ? TEXT.STEP_2 : TEXT.STEP_1}
          </h2>
        </span>
        {nextStep ? StepTwo : StepOne}
      </div>
    </div>
  );
};

export default CreateForm;
