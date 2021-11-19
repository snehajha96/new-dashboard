import React from "react";

const Form = () => {
  return (


        <div className=" mx-2 shadow-sm mb-5 bg-white rounded">
        <div className="px-3">
        <h3>Onboarded forms</h3><hr/>
      </div>
          <form className="px-3">
            <div>
              <div className="form-row">
                <div className="form-group col-md-6 has-validation">
                  <label htmlFor="inputEmail4">Email</label>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-6 has-validation">
                  <label htmlFor="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option defaultValue>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="example-datetime-local-input"
                className=" col-form-label"
              >
                Date and time
              </label>
              <div className="">
                <input
                  className="form-control"
                  type="datetime-local"
                  defaultValue="2011-08-19T13:45:00"
                  id="example-datetime-local-input"
                />
              </div>
            </div>

            <div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">
                  Example file input
                </label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <div className="form-check-inline m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Default radio
                </label>
              </div>
              <div className="form-check-inline m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Second default radio
                </label>
              </div>
              <div className="form-check-inline m-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  defaultValue="option3"
                  disabled
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Disabled radio
                </label>
              </div>
            </div>
            <div className="form-group my-2">
              <label htmlFor="exampleFormControlTextarea1">
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>

            <div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
            
  );
};

export default Form;
