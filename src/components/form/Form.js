import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Form.css";

class Form extends Component {
  state = {
    formElements: {
      username: {
        type: "",
        value: "",
        validator: {
          required: true,
          minLength: 5,
          maxLength: 15,
        },
        touched: false,
        error: { status: true, message: "" },
      },
      password: {
        type: "",
        value: "",
        validator: {
          required: true,
          minLength: 5,
          maxLength: 15,
        },
        touched: false,
        error: { status: true, message: "" },
      },
    },
  };

  submit = () => {};

  checkValidator = (value, rule) => {
    let valid = true;
    let message = "";
    if (rule.required) {
      if (value.trim().length === 0) {
        valid = false;
        message = "กรุณากรอกข้อมูล";
      }
    }
    if (value.length < rule.minLength && valid) {
      valid = false;
      message = "น้อยกว่า " + rule.minLength + " ตัวอักษร";
    }
    if (value.length > rule.maxLength && valid) {
      valid = false;
      message = "มากกว่า " + rule.maxLength + " ตัวอักษร";
    }
    return { status: valid, message: message };
  };

  onFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let updateForm = { ...this.state.formElements };
    updateForm[name].value = value;
    updateForm[name].touched = true;

    const validatorObject = this.checkValidator(
      value,
      updateForm[name].validator
    );

    updateForm[name].error = {
      status: validatorObject.status,
      message: validatorObject.message,
    };

    let formStatus = true;

    for (let name in updateForm) {
      if (updateForm[name].validator.required === true) {
        formStatus = !updateForm[name].error.status && formStatus;
      }
    }

    this.setState({
      ...this.state,
      formElements: updateForm,
      formValid: formStatus,
    });
  };

  getErrorMessage = (name) => {
    return this.state.formElements[name].error.message;
  };

  getInputClass = (name) => {
    if (this.state.formElements[name].touched) {
      const elementErrorStatus = this.state.formElements[name].error.status;
      const classReturn =
        elementErrorStatus && this.state.formElements[name].touched
          ? "form-control is-valid"
          : "form-control is-invalid";
      return classReturn;
    } else {
      return "form-control";
    }
  };

  onLoginSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-2">
          <div className="col-3"></div>
          <div className="col-6">Form Class Component</div>
          <div className="col-3"></div>
        </div>

        <div className="card">
          <div className="card-body">
            <form onSubmit={this.onLoginSubmit}>
              <div className="form-group row mb-2">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-4 col-form-label right-align"
                >
                  Username :
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className={this.getInputClass("username")}
                    id="username"
                    name="username"
                    onChange={this.onFormChange}
                  />
                  <div className="invalid-feedback">
                    {this.getErrorMessage("username")}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-4 col-form-label right-align"
                >
                  Password :
                </label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className={this.getInputClass("password")}
                    id="password"
                    name="password"
                    onChange={this.onFormChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-3"></div>
                <div className="col-6">
                  <NavLink to="/confirm-form">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={this.submit}
                    >
                      Login
                    </button>
                  </NavLink>

                  <button className="btn btn-danger">Cancel</button>
                </div>
                <div className="col-3"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
