import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser, me } from '../../store/actions/authActions'
import { addPlan } from '../../store/actions/planActions'
import './scss/plans.scss'
import { toast } from 'react-toastify'
import { PaystackConsumer } from 'react-paystack'
import api, { baseURL } from '../../api/api'

class CreatePlan extends Component {
  constructor() {
    super()

    this.state = {
      plan_type: '',
      plan_name: '',
      building_type: '',
      material_type: '',
      cement_percentage: '',
      block_percentage: '',
      start_date: '',
      country: '',
      deposit: '',
      material_estimation: '',
      deposit_frequency: '',
      block_target: '',
      cement_target: '',
      cementOnly: false,
      blockOnly: false,
      both: false,
      isRecurrent: false,
      submitting: false,
      userData: {},
      plan_id: '',
      errors: {},
      clickValue: 'pay',
    }
    this.myRef = React.createRef()

    this.logout = this.logout.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  logout(e) {
    e.preventDefault()

    this.props.logoutUser()
  }

  componentDidMount() {
    this.props.match.params.type == 1
      ? this.setState({ isRecurrent: true })
      : this.setState({ isRecurrent: false })

    this.props.me()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      }
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  processClick = (val) => {
    this.setState({ clickValue: val })
    const f = document.getElementById('submitBtn')
    f.click()
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.setState({ submitting: true })

    const plan_type = this.props.match.params.type == 1 ? 'recurrent' : 'single'
    let material_type
    if (this.state.cementOnly) {
      material_type = 'cement'
    } else if (this.state.blockOnly) {
      material_type = 'blocks'
    } else {
      material_type = 'both'
    }
    let deposit_frequency
    if (typeof this.state.deposit_frequency !== String) {
      deposit_frequency = 'None'
    } else {
      deposit_frequency = this.state.deposit_frequency
    }
    const payload = {
      plan_type,
      plan_name: this.state.plan_name,
      building_type: this.state.building_type,
      material_type,
      cement_percentage: this.state.cement_percentage,
      block_percentage: this.state.block_percentage,
      block_target: this.state.block_target,
      cement_target: this.state.cement_target,
      start_date: this.state.start_date,
      country: this.state.country,
      deposit: this.state.deposit,
      material_estimation: this.state.material_estimation,
      deposit_frequency,
    }

    this.props
      .addPlan(payload)
      .then((res) => {
        if (res.type && res.type === 'GET_ERRORS') {
          return toast.error(res.payload.status)
        }
        if (res && res.payload.status_code === 201) {
          this.setState({ plan_id: res.payload.data.id })
          if (this.state.clickValue === 'pay') {
            return this.myRef.current.click()
          }
          toast.success('Plan created successfully')
        }
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ submitting: false }))
  }

  render() {
    const {
      isRecurrent,
      plan_name,
      building_type,
      material_estimation,
      cementOnly,
      blockOnly,
      both,
      start_date,
      country,
      deposit,
      deposit_frequency,
      cement_percentage,
      block_percentage,
      block_target,
      cement_target,
      submitting,
      errors,
    } = this.state

    const { userData, loading } = this.props.auth

    console.log(errors)

    const config = {
      reference: new Date().getTime(),
      email: userData.email,
      amount: this.state.deposit * 100,
      publicKey: 'pk_test_bf7f7fd26a659d22a09510c20e98d7bc55151855',
      metadata: {
        block_target: this.state.block_target,
        cement_target: this.state.cement_target,
        plan_id: this.state.plan_id,
        custom_fields: [
          {
            display_name: 'Plan Id',
            variable_name: 'plan_id',
            value: this.state.plan_id,
          },
          {
            display_name: 'Block Target',
            variable_name: 'block_target',
            value: this.state.block_target,
          },
          {
            display_name: 'Cement Target',
            variable_name: 'cement_target',
            value: this.state.cement_target,
          },
        ],
      },
      block_target: this.state.block_target,
      cement_target: this.state.cement_target,
      plan_id: this.state.plan_id,
    }

    const componentProps = {
      ...config,
      text: 'Paystack Button Implementation',
      onSuccess: (data) => {
        console.log(data)
        const payload = {
          user_id: userData.uuid,
          reference: data.trxref,
          block_target: this.state.block_target,
          cement_target: this.state.cement_target,
          plan_id: this.state.plan_id,
          amount: this.state.deposit,
        }
        api
          .post('/payment/verify', payload)
          .then((res) => {
            if (res.data.status_code === 200) {
              toast.success('Payment successfully completed')
              this.setState({
                isRecurrent: '',
                plan_name: '',
                building_type: '',
                material_estimation: '',
                cementOnly: '',
                blockOnly: '',
                both: '',
                start_date: '',
                country: '',
                deposit: '',
                deposit_frequency: '',
                cement_percentage: '',
                block_percentage: '',
                block_target: '',
                cement_target: '',
              })
            } else {
              toast.error('Something went wrong')
            }
          })
          .catch((err) => toast.error('Something went wrong'))
      },
      onClose: () => null,
    }

    return (
      <div className="plans-wrapper">
        <div className="sidenav__container-home">
          <div className="sidebar-home sidenav-home">
            <Link className="logo" to="/">
              Laybuy
            </Link>
            <button className="sidenav-close-home">
              <img src="../assets/images/close.svg" />
            </button>
            <div className="links-home">
              <div className="link-home">
                <span
                  class="iconify"
                  data-icon="fa-regular:building"
                  data-inline="false"
                ></span>
                <Link to="/home">Home</Link>
              </div>
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
            <a className="logout__link-home" href="#" onClick={this.logout}>
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
          <Link className="logo-home" to="/">
            Laybuy
          </Link>
          <div className="links-home">
            <div className="link-home">
              <span
                className="iconify"
                data-icon="fa-regular:building"
                data-inline="false"
              ></span>
              <Link to="/home">Home</Link>
            </div>
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
          <a className="logout__link-home" href="#" onClick={this.logout}>
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
              {/* <a href="http://" class="backlink-home">
                <div class="back-home">
                  <img src="../assets/images/Path 3 Copy.svg" alt="" />
                  <h2>Back</h2>
                </div>
              </a> */}
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
                <a href="#" class="logoutNav-home" onClick={this.logout}>
                  Logout
                </a>
              </div>
            </div>
            <div class="main-body-home">
              <form
                class="NewPlanForm-home one-time-deposit-form show-form"
                onSubmit={(e) => this.onSubmit(e)}
                id="myForm"
                role="form"
              >
                <div class="form-group-full-home">
                  <div class="form-group-header-home">
                    <h2>
                      Plan Name{' '}
                      <span class="Important-home">
                        <img
                          src="../assets/images/Reason for saving.svg"
                          alt=""
                        />
                      </span>{' '}
                    </h2>
                    <span className="ast">*</span>
                  </div>
                  <input
                    type="text"
                    class="form-input-full-home"
                    name="plan_name"
                    value={plan_name}
                    onChange={this.onChange}
                    required
                  />
                  {errors.errors && errors.errors.plan_name && (
                    <span style={{ color: 'red' }}>
                      {errors.errors.plan_name}
                    </span>
                  )}
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
                    value={building_type}
                    onChange={this.onChange}
                  />
                  {errors.errors && errors.errors.building_type && (
                    <span style={{ color: 'red' }}>
                      {errors.errors.building_type}
                    </span>
                  )}
                </div>

                <div class="form-group-full-home">
                  <div class="form-group-header-home">
                    <h2>Estimation of materials needed</h2>
                  </div>
                  <input
                    type="text"
                    class="form-input-full-home"
                    name="material_estimation"
                    value={material_estimation}
                    onChange={this.onChange}
                    placeholder="1000 Units of Blocks, 100 Bags of Cement"
                  />
                  {errors.errors && errors.errors.material_estimation && (
                    <span style={{ color: 'red' }}>
                      {errors.errors.material_estimation}
                    </span>
                  )}
                </div>

                {isRecurrent && (
                  <div class="form-group-full-home">
                    <div className="select select--inline form-group custom-select">
                      <div class="form-group-header-home">
                        <h2>Deposit Frequency </h2>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="ast">*</span>
                      </div>
                      <select
                        className="select-css"
                        value={deposit_frequency}
                        name="deposit_frequency"
                        onChange={this.onChange}
                      >
                        <option value="">Select deposit frequency</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                      {errors.errors && errors.errors.deposit_frequency && (
                        <span style={{ color: 'red' }}>
                          {errors.errors.deposit_frequency}
                        </span>
                      )}
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
                        checked={blockOnly}
                        onChange={() =>
                          this.setState({ blockOnly: !blockOnly })
                        }
                      />
                      <label for="Blocks">&nbsp;&nbsp;Blocks only</label>
                    </div>

                    <div class="radio-group-home">
                      <input
                        type="radio"
                        name="connected"
                        id="cement"
                        checked={cementOnly}
                        onChange={() =>
                          this.setState({ cementOnly: !cementOnly })
                        }
                      />
                      <label for="cement">&nbsp;&nbsp;Cement only</label>
                    </div>

                    <div class="radio-group-home">
                      <input
                        type="radio"
                        name="connected"
                        id="both"
                        checked={both}
                        onChange={() => this.setState({ both: !both })}
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
                        onChange={this.onChange}
                        value={block_target}
                      />
                      {errors.errors && errors.errors.block_target && (
                        <span style={{ color: 'red' }}>
                          {errors.errors.block_target}
                        </span>
                      )}
                    </div>

                    <div class="half-groups-home">
                      <label for="cement-unit">Bags of Cement</label>
                      <input
                        type="number"
                        min="1"
                        id="cement-unit"
                        class="half-input-home"
                        name="cement_target"
                        onChange={this.onChange}
                        value={cement_target}
                      />
                      {errors.errors && errors.errors.cement_target && (
                        <span style={{ color: 'red' }}>
                          {errors.errors.cement_target}
                        </span>
                      )}
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
                        onChange={this.onChange}
                        value={block_percentage}
                        class="half-input-home"
                      />
                      {errors.errors && errors.errors.block_percentage && (
                        <span style={{ color: 'red' }}>
                          {errors.errors.block_percentage}
                        </span>
                      )}
                    </div>

                    <div class="half-groups-home">
                      <label for="cement-unit">% Bags of Cement</label>
                      <input
                        type="number"
                        min="1"
                        name="cement_percentage"
                        onChange={this.onChange}
                        value={cement_percentage}
                        id="cement-unit"
                        class="half-input-home"
                      />
                      {errors.errors && errors.errors.cement_percentage && (
                        <span style={{ color: 'red' }}>
                          {errors.errors.cement_percentage}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div class="form-group-full-home">
                  <div class="form-group-header-home">
                    <h2>When is your start date? </h2>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="ast">*</span>
                  </div>
                  <input
                    type="date"
                    class="form-input-full-home"
                    name="start_date"
                    value={start_date}
                    onChange={this.onChange}
                    required
                  />
                  {errors.errors && errors.errors.start_date && (
                    <span style={{ color: 'red' }}>
                      {errors.errors.start_date}
                    </span>
                  )}
                </div>

                <div class="form-group-full-home">
                  <div className="select select--inline form-group custom-select">
                    <div class="form-group-header-home">
                      <h2>Stockpile Country </h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="ast">*</span>
                    </div>
                    <select
                      className="select-css"
                      value={country}
                      name="country"
                      onChange={this.onChange}
                      required
                    >
                      <option value="">Select country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="kenya">Kenya</option>
                    </select>
                    {errors.errors && errors.errors.country && (
                      <span style={{ color: 'red' }}>
                        {errors.errors.country}
                      </span>
                    )}
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
                    value={deposit}
                    onChange={this.onChange}
                    required
                  />
                  {errors.errors && errors.errors.deposit && (
                    <span style={{ color: 'red' }}>
                      {errors.errors.deposit}
                    </span>
                  )}
                </div>

                {!submitting && (
                  <>
                    <button
                      class="btn-home plans-submit-home"
                      type="button"
                      children="Save Plan Draft"
                      style={{ marginRight: '10px' }}
                      onClick={() => this.processClick('save')}
                    />

                    {!loading && (
                      <button
                        class="btn-home plans-submit-home"
                        children="Add Plan & Pay"
                        type="button"
                        onClick={() => this.processClick('pay')}
                      />
                    )}
                    <input type="submit" hidden id="submitBtn" />
                  </>
                )}
                {submitting && (
                  <button class="btn-home plans-submit-home" disabled>
                    Adding plan...
                  </button>
                )}
              </form>

              <PaystackConsumer {...componentProps}>
                {({ initializePayment }) => (
                  <button
                    onClick={() => initializePayment()}
                    ref={this.myRef}
                    className="hide-pay"
                  >
                    Paystack Consumer Implementation
                  </button>
                )}
              </PaystackConsumer>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  logoutUser,
  addPlan,
  me,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlan)
