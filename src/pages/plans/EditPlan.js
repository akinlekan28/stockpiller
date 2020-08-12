import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "./scss/plans.scss";
import { toast } from "react-toastify";
import api from "../../api/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditPlan() {
  const { id } = useParams();

  const handleOnChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  });

  const [both, setBoth] = useState(false);
  const [cement, setCement] = useState(false);
  const [block, setBlock] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [start_date, setStart_date] = useState(new Date());

  const [formValues, setFormValues] = useState({
    plan_name: "",
    building_type: "",
    material_estimation: "",
    material_type: "",
    cement_percentage: "",
    block_percentage: "",
    start_date: new Date(),
    block_target: "",
    cement_target: "",
    deposit: "",
    plan_type: "",
    country: "",
    deposit_frequency: "",
  });
  const [plan, setPlan] = useState({});
  const [loading, setLoading] = useState(false);

  const getPlan = () => {
    api.get(`/plan/${id}`).then((res) => {
      setFormValues({
        plan_type: res.data.data.plan_type,
        plan_name: res.data.data.plan_name,
        building_type: res.data.data.building_type,
        material_estimation: res.data.data.material_estimation,
        material_type: res.data.data.material_type,
        cement_percentage: res.data.data.cement_percentage,
        block_percentage: res.data.data.block_percentage,
        start_date: res.data.data.start_date,
        block_target: res.data.data.block_target,
        cement_target: res.data.data.cement_target,
        deposit: res.data.data.deposit,
        plan_type: res.data.data.plan_type,
        country: res.data.data.country,
        deposit_frequency: res.data.data.deposit_frequency,
      });
      setBlock(res.data.data.material_type === "block");
      setCement(res.data.data.material_type === "cement");
      setBoth(res.data.data.material_type === "both");
      setLoading(false);
    });
  };

  const submitPlan = (e) => {
    e.preventDefault();
    setSubmitting(true);

    let material_type;
    if (cement) {
      material_type = "cement";
    } else if (block) {
      material_type = "blocks";
    } else {
      material_type = "both";
    }
    let deposit_frequency;
    if (typeof formValues.deposit_frequency !== String) {
      deposit_frequency = "None";
    } else {
      deposit_frequency = formValues.deposit_frequency;
    }

    const payload = {
      plan_type: formValues.plan_type,
      material_type,
      deposit_frequency,
      plan_name: formValues.plan_name,
      building_type: formValues.building_type,
      cement_percentage: formValues.cement_percentage,
      block_percentage: formValues.block_percentage,
      block_target: formValues.block_target,
      cement_target: formValues.cement_target,
      start_date: formValues.start_date,
      country: formValues.country,
      deposit: formValues.deposit,
      material_estimation: formValues.material_estimation,
    };

    api
      .put(`/plan/${id}`, payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => setSubmitting(false));
  };

  const handleChange = (date) => {
    setStart_date(date);
  };

  useEffect(() => {
    getPlan();
  }, []);
  return (
    <div className="plans-wrapper">
      <div className="sidenav__container-home">
        <div className="sidebar-home sidenav-home">
          <div className="header-title">
            <Link className="logo" to="/">
              Stockpiller
            </Link>
          </div>
          <button className="sidenav-close-home">
            <img src="../assets/images/close.svg" />
          </button>
          <div className="links-home">
            <div className="link-home">
              <span
                class="iconify"
                data-icon="ic:baseline-dashboard"
                data-inline="false"
              ></span>
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="link-home active-home">
              <span
                className="iconify"
                data-icon="bx:bxs-bar-chart-alt-2"
                data-inline="false"
              ></span>
              <Link to="/plans">Plans</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="bi:calculator-fill"
                data-inline="false"
              ></span>
              <Link to="/transactions">Transactions</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="ri:send-plane-fill"
                data-inline="false"
              ></span>
              <Link to="/withdraw">Withdraw</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="vaadin:wallet"
                data-inline="false"
              ></span>
              <Link to="/cards">Cards</Link>
            </div>
            <div className="link-home">
              <span
                className="iconify"
                data-icon="clarity:cog-line"
                data-inline="false"
              ></span>
              <Link to="/settings">Settings</Link>
            </div>
          </div>
          <a className="logout__link-home" href="#">
            <span
              className="iconify"
              data-icon="ri:logout-box-line"
              data-inline="false"
            ></span>
            Logout
          </a>
        </div>
      </div>
      <div className="sidebar-home">
        <div className="header-title">
          <Link className="logo-home" to="/">
            Stockpiller
          </Link>
        </div>
        <div className="links-home">
          <div className="link-home">
            <span
              className="iconify"
              data-icon="ic:baseline-dashboard"
              data-inline="false"
            ></span>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="link-home active-home">
            <span
              className="iconify"
              data-icon="bx:bxs-bar-chart-alt-2"
              data-inline="false"
            ></span>
            <Link to="/plans">Plans</Link>
          </div>
          <div className="link-home">
            <span
              className="iconify"
              data-icon="bi:calculator-fill"
              data-inline="false"
            ></span>
            <Link to="/transactions">Transactions</Link>
          </div>
          <div className="link-home">
            <span
              className="iconify"
              data-icon="ri:send-plane-fill"
              data-inline="false"
            ></span>
            <Link to="/withdraw">Withdraw</Link>
          </div>
          <div className="link-home">
            <span
              className="iconify"
              data-icon="vaadin:wallet"
              data-inline="false"
            ></span>
            <Link to="/cards">Cards</Link>
          </div>
          <div className="link-home">
            <span
              className="iconify"
              data-icon="clarity:cog-line"
              data-inline="false"
            ></span>
            <Link to="/settings">Settings</Link>
          </div>
        </div>
        <a className="logout__link-home" href="#">
          <span
            className="iconify"
            data-icon="ri:logout-box-line"
            data-inline="false"
          ></span>
          Logout
        </a>
      </div>
      <div className="cover-overlay-home"></div>
      <main>
        <div class="main-container-home">
          <div class="main-header-home">
            <div class="open-home">
              <div class="bar-home"></div>
              <div class="bar-home"></div>
              <div class="bar-home"></div>
            </div>
            <a href="#" class="backlink-home">
              <div class="back-home">
                <img src="../assets/images/Path 3 Copy.svg" alt="" />
                {/* <h2>Back</h2> */}
              </div>
            </a>
            {/* <table class="stocks-home">
              <tr>
                <td>Rates</td>
                <td>Blocks</td>
                <td>Cement</td>
              </tr>
              <tr>
                <td>Local</td>
                <td>
                  <img src="../assets/images/Group 44.svg" alt="" />
                  <h3>&#8358 200</h3>
                </td>
                <td>
                  <img src="../assets/images/Group 38.svg" alt="" />
                  <h3>&#8358 200</h3>
                </td>
              </tr>
              <tr>
                <td>Internatinal</td>
                <td>
                  <img
                    class="down-arrow-home"
                    src="../assets/images/Group 44.svg"
                    alt=""
                  />
                  <h3>$2</h3>
                </td>
                <td>
                  <img
                    class="up-arrow-home"
                    src="../assets/images/Group 38.svg"
                    alt=""
                  />
                  <h3>$2</h3>
                </td>
              </tr>
            </table> */}
            <div class="personalize-home">
              <img
                class="notification-bell-home"
                src="../assets/images/Group 3.svg"
                alt=""
              />
              <div class="avatar-home">
                <img src="../assets/images/Oval.svg" alt="" />
              </div>
              <a href="#" class="logoutNav-home">
                Logout
              </a>
            </div>
          </div>
          <div class="main-body-home">
            <form
              class="NewPlanForm-home one-time-deposit-form show-form"
              onSubmit={submitPlan}
            >
              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>
                    Plan Name{" "}
                    <span class="Important-home">
                      <img
                        src="../assets/images/Reason for saving.svg"
                        alt=""
                      />
                    </span>{" "}
                  </h2>
                  <span className="ast">*</span>
                </div>
                <input
                  type="text"
                  class="form-input-full-home"
                  name="plan_name"
                  value={formValues.plan_name}
                  onChange={handleOnChange}
                  required
                />
                {/* {errors.errors && errors.errors.plan_name && (
                  <span style={{ color: "red" }}>
                    {errors.errors.plan_name}
                  </span>
                )} */}
              </div>

              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>Choose Building Type</h2>
                </div>
                <input
                  type="text"
                  class="form-input-full-home"
                  placeholder="e.g  1 Bedroom Apartment"
                  name="building_type"
                  value={formValues.building_type}
                  onChange={handleOnChange}
                />
                {/* {errors.errors && errors.errors.building_type && (
                  <span style={{ color: "red" }}>
                    {errors.errors.building_type}
                  </span>
                )} */}
              </div>

              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>Estimation of materials needed</h2>
                </div>
                <input
                  type="text"
                  class="form-input-full-home"
                  name="material_estimation"
                  value={formValues.material_estimation}
                  onChange={handleOnChange}
                  placeholder="1000 Units of Blocks, 100 Bags of Cement"
                />
                {/* {errors.errors && errors.errors.material_estimation && (
                  <span style={{ color: "red" }}>
                    {errors.errors.material_estimation}
                  </span>
                )} */}
              </div>

              {formValues.plan_type === "recurrent" && (
                <div class="form-group-full-home">
                  <div className="select select--inline">
                    <div class="form-group-header-home">
                      <h2>Deposit Frequency </h2>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="ast">*</span>
                    </div>
                    <select
                      className="select-css"
                      value={formValues.deposit_frequency}
                      name="deposit_frequency"
                      onChange={handleOnChange}
                    >
                      <option value="">Select deposit frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                    {/* {errors.errors && errors.errors.deposit_frequency && (
                      <span style={{ color: "red" }}>
                        {errors.errors.deposit_frequency}
                      </span>
                    )} */}
                  </div>
                </div>
              )}

              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>Choose Materials </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="ast">*</span>
                </div>
                <div class="select-group-home">
                  <div class="radio-group-home">
                    <input
                      type="radio"
                      name="connected"
                      id="Blocks"
                      checked={block}
                      onChange={() => setBlock(!block)}
                    />
                    <label for="Blocks">&nbsp;&nbsp;Blocks only</label>
                  </div>

                  <div class="radio-group-home">
                    <input
                      type="radio"
                      name="connected"
                      id="cement"
                      checked={cement}
                      onChange={() => setCement(!cement)}
                    />
                    <label for="cement">&nbsp;&nbsp;Cement only</label>
                  </div>

                  <div class="radio-group-home">
                    <input
                      type="radio"
                      name="connected"
                      id="both"
                      checked={both}
                      onChange={() => setBoth(!both)}
                    />
                    <label for="both">&nbsp;&nbsp;Both</label>
                  </div>
                </div>
              </div>

              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>Stokkpile target</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="ast">*</span>
                </div>
                <div class="units-of-home">
                  <div class="half-groups-home">
                    <label for="blocks-unit-home">Unit of Blocks</label>
                    <input
                      type="number"
                      min="1"
                      id="blocks-unit"
                      class="half-input-home"
                      name="block_target"
                      onChange={handleOnChange}
                      value={formValues.block_target}
                    />
                    {/* {errors.errors && errors.errors.block_target && (
                      <span style={{ color: "red" }}>
                        {errors.errors.block_target}
                      </span>
                    )} */}
                  </div>

                  <div class="half-groups-home">
                    <label for="cement-unit">Bags of Cement</label>
                    <input
                      type="number"
                      min="1"
                      id="cement-unit"
                      class="half-input-home"
                      name="cement_target"
                      onChange={handleOnChange}
                      value={formValues.cement_target}
                    />
                    {/* {errors.errors && errors.errors.cement_target && (
                      <span style={{ color: "red" }}>
                        {errors.errors.cement_target}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>

              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>Building Materials Priority</h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="ast">*</span>
                </div>
                <div class="units-of-home">
                  <div class="half-groups-home">
                    <label for="blocks-unit-home">% Unit of Blocks</label>
                    <input
                      type="number"
                      min="1"
                      id="blocks-unit"
                      name="block_percentage"
                      onChange={handleOnChange}
                      value={formValues.block_percentage}
                      class="half-input-home"
                    />
                    {/* {errors.errors && errors.errors.block_percentage && (
                      <span style={{ color: "red" }}>
                        {errors.errors.block_percentage}
                      </span>
                    )} */}
                  </div>

                  <div class="half-groups-home">
                    <label for="cement-unit">% Bags of Cement</label>
                    <input
                      type="number"
                      min="1"
                      name="cement_percentage"
                      onChange={handleOnChange}
                      value={formValues.cement_percentage}
                      id="cement-unit"
                      class="half-input-home"
                    />
                    {/* {errors.errors && errors.errors.cement_percentage && (
                      <span style={{ color: "red" }}>
                        {errors.errors.cement_percentage}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>

              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>When is your start date? </h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ast">*</span>
                </div>
                {/* <input
                  type="date"
                  class="form-input-full-home"
                  name="start_date"
                  value={formValues.start_date}
                  onChange={handleOnChange}
                  required
                /> */}
                <DatePicker
                  selected={new Date(formValues.start_date)}
                  onChange={handleChange}
                  className="form-input-full-home"
                  style={{ height: "40px" }}
                />

                {/* {errors.errors && errors.errors.start_date && (
                  <span style={{ color: "red" }}>
                    {errors.errors.start_date}
                  </span>
                )} */}
              </div>

              <div class="form-group-full-home">
                <div className="select select--inline">
                  <div class="form-group-header-home">
                    <h2>Stockpile Country </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="ast">*</span>
                  </div>
                  <select
                    className="select-css"
                    value={formValues.country}
                    name="country"
                    onChange={handleOnChange}
                    required
                  >
                    <option value="">Select country</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="kenya">Kenya</option>
                  </select>
                  {/* {errors.errors && errors.errors.country && (
                    <span style={{ color: "red" }}>
                      {errors.errors.country}
                    </span>
                  )} */}
                </div>
              </div>

              <div class="form-group-full-home">
                <div class="form-group-header-home">
                  <h2>
                    Deposit Amount <span class="Important-home"></span>
                  </h2>
                  <span className="ast">*</span>
                </div>
                <input
                  type="number"
                  class="form-input-full-home"
                  name="deposit"
                  value={formValues.deposit}
                  onChange={handleOnChange}
                  required
                />
                {/* {errors.errors && errors.errors.deposit && (
                  <span style={{ color: "red" }}>{errors.errors.deposit}</span>
                )} */}
              </div>

              {!submitting && (
                <button class="btn-home plans-submit-home" type="submit">
                  Edit Plan
                </button>
              )}
              {submitting && (
                <button class="btn-home plans-submit-home" disabled>
                  Editting plan...
                </button>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
