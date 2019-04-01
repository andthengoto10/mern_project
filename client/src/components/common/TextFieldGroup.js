import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="input-field col s12">
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        label={label}
        value={value}
        onChange={onChange}         
        disabled={disabled}
        // className={classnames("", {'is-invalid': error})}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
      <label htmlFor="email">Email</label>
      {/* <span className="red-text">
        {errors.email}
        {errors.emailnotfound}
      </span> */}
    </div>
  );
};
TextFieldGroup.propTypes = {
    name: propTypes.string.isRequired,
    placeholder: propTypes.string,
    value: propTypes.string.isRequired,
    error: propTypes.string,
    info: propTypes.string,
    type: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    disabled: propTypes.string,
    label: propTypes.string
}

TextFieldGroup.defaultPops = {
    type: 'text'
}

export default TextFieldGroup;
