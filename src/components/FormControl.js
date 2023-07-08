import React from "react";
import classNames from "classnames";
export default function FormControl({
  label,
  type,
  as,
  wrapperClass,
  options,
  className,
  dataName,
  group,
  error,
  ...rest
}) {
  const renderElement =
    type === "select" ? (
      <>
        <select
          {...rest}
          className={classNames(
            "form-select",
            className,
            error !== "" ? "is-invalid" : ""
          )}
          data-name={dataName}
        >
          {[
            { value: "s", label: `-- Select ${label.toLowerCase()} --` },
            ...options,
          ].map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {!error || error !== "" || !group ? (
          <div className="invalid-feedback">{error}</div>
        ) : (
          ""
        )}
      </>
    ) : (
      <>
        <input
          {...rest}
          type={type}
          className={classNames(
            "form-control",
            className,
            error !== "" ? "is-invalid" : ""
          )}
          data-name={dataName}
        />
        {error || error !== "" && !group ? (
          <div className="invalid-feedback">{error}</div>
        ) : (
          ""
        )}
      </>
    );
  return (
    <>
      <div className={wrapperClass}>
        {label && label !== "" ? (
          <label className="form-label">{label}</label>
        ) : (
          <></>
        )}
        {group ? (
          <>
            <div
              className={
                "input-group" +
                (group?.type === "merge" ? " input-group-merge" : "")
              }
            >
              {group?.pos === "left" ? (
                <span className="input-group-text">{group?.text}</span>
              ) : (
                <></>
              )}
              {renderElement}
              {group?.pos === "right" ? (
                <span className="input-group-text">{group?.text}</span>
              ) : (
                <></>
              )}
            </div>
            {error && error === "" ? (
              <div className="invalid-feedback">{error}</div>
            ) : (
              ""
            )}
          </>
        ) : (
          <div
            className={
              error
                ? error
                  ? "form-group feild-invalid"
                  : "form-group"
                : "form-group"
            }
          >
            {renderElement}
          </div>
        )}
      </div>
    </>
  );
}
FormControl.defaultProps = {
  options: [],
};
