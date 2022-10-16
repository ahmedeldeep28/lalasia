import React from "react";
import { Field, ErrorMessage } from "formik";

export function FormInput({ propsInput,className, name, label, type, ...rest }) {
  const { errors, touched } = propsInput;
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field
        className={`form-input 
        ${(errors[name] && touched[name]) ? "notValid" : ""} 
        ${(!errors[name] && touched[name]) ? "isValid" : ""}
        
          `}
        type={type}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name}>
        {(errMesg) => <p className="text-red-600">{errMesg}</p>}
      </ErrorMessage>
    </div>
  );
}

export function FormSelect({ propsInput, name, label, type,children, ...rest }) {
  const { errors, touched } = propsInput;
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field
        as="select"
        className={`form-select ${errors[name] && touched[name] && "notValid"} ${!errors[name] && touched[name] && "isValid"}`}
        type={type}
        name={name}
        {...rest}
      >
        {children}
      </Field>

      <ErrorMessage name={name}>
        {(errMesg) => <p className="text-red-600">{errMesg}</p>}
      </ErrorMessage>
    </div>
  );
}

export function FormCheckBox({ propsInput, name, label, ...rest }) {
  const { errors, touched } = propsInput;
  return (
    <div className="mb-3">
      <Field
        className={`form-checkbox ${errors[name] && touched[name] && "h"} 
        ${!errors[name] && touched[name] && "s"}`}
        type="checkbox"
        name={name}
        id={name}
        {...rest}
      />
      <label className="form-label text-sm" htmlFor={name}>
        {label}
      </label>
      <ErrorMessage name={name}>
        {(errMesg) => <p className="text-red-600">{errMesg}</p>}
      </ErrorMessage>
    </div>
  );
}
export function FormRadio({ propsInput, name, label,id, ...rest }) {
    
  return (
    <div className="mb-3">
      <Field
        className={`form-radio`}
        type="radio"
        name={name}
        id={id}
        {...rest}
      />
      <label className="form-label text-sm ml-2 mb-0" htmlFor={id}>
        {label}
      </label>
      <ErrorMessage name={name}>
        {(errMesg) => <p className="text-red-600">{errMesg}</p>}
      </ErrorMessage>
    </div>
  );
}

