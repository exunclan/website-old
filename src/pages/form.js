import React, { Component } from 'react';
import { navigate } from '@reach/router';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import base64 from 'base-64';
import { ToastProvider } from 'react-toast-notifications';
import { toast } from 'react-toastify';
import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';
import 'react-toastify/dist/ReactToastify.css';
import styles from './about.module.css';
import departments from '../components/formItem';
import { useState } from 'react';
import axios from 'axios';

import './form.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
toast.configure();
class eLite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: departments,
      email: base64.decode(this.props.location.search.slice(5)),
      loading: false,
      submitted: false,
    };
  }

  render() {
    const postReq = () => {
      this.setState({ loading: true });
      axios
        .post(
          `https://elite-reg.now.sh/form/${base64.encode(
            this.state.email
          )}?array=${JSON.stringify(
            this.state.list
              .filter(dept => {
                return dept.selected == true;
              })
              .map(value => {
                return value.name;
              })
          )}`
        )
        .then(response => {
          // toast('Form Submitted!', {
          //   position: 'top-right',
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
          // // handle success
          // console.log(response);
          // this.setState({ loading: false });
          // this.setState({ submitted: true });
          navigate('/thankyou');
        })
        .catch(error => {
          // handle error
          console.log(error);
          toast('An error occured, please try again.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .finally(() => {
          console.log('done!');
        });
    };

    const selectDept = id => {
      this.setState({
        list: this.state.list.map(dept => {
          if (dept.id === id) {
            return {
              id: dept.id,
              name: dept.name,
              selected: !dept.selected,
            };
          } else {
            return dept;
          }
        }),
      });
    };
    const FormOpt = props => {
      if (props.name.name === 'Creative') {
        return (
          <div>
            <span>
              <input
                type="checkbox"
                checked={props.name.selected}
                onChange={() => selectDept(props.name.id)}
              />{' '}
              {props.name.name}
              <br />
              <p
                style={{
                  fontSize: '13px',
                  lineHeight: '100%',
                  padding: 0,
                  marginTop: '-06px',
                  marginBottom: '12px',
                }}
              >
                This includes Graphic Design, Video Design, Audio Production,
                Web Development, <br /> Game Development, App Development and 3D
                Design
              </p>
            </span>
          </div>
        );
      } else {
        return (
          <div>
            <span>
              <input
                type="checkbox"
                checked={props.name.selected}
                onChange={() => selectDept(props.name.id)}
              />{' '}
              {props.name.name}
            </span>
          </div>
        );
      }
    };

    const RenderDept = () => {
      return this.state.list.map((dept, index) => {
        return <FormOpt name={dept} key={dept.id} />;
      });
    };

    const RenderMain = () => {
      if (!this.state.submitted) {
        return (
          <>
            <p>
              Hey there,{' '}
              <span style={{ textTransform: 'capitalize' }}>
                {this.state.email.slice(6, -11)}!
              </span>
              <br />
              Please select the department(s) you’d like to participate in:
            </p>
            <RenderDept />
            <ButtonRender />
          </>
        );
      } else {
        return (
          <div>
            <p>
              Thank you for registering! Please check your school email &mdash;
              you will receive invitations to the Google Classroom(s) for the
              department(s) you have registered for. All announcements and
              details regarding the inductions for that department will be posed
              in the classroom.
              <br /> If you wish to participate in another department and did
              not select it in the form, or if you have any other questions,
              please email us at exun@dpsrkp.net. <br />
              Looking forward to having you with us for e-Lite 2020!
            </p>
          </div>
        );
      }
    };

    const ButtonRender = () => {
      if (!this.state.loading) {
        return (
          <div style={{ paddingTop: '20px' }}>
            <button
              onClick={() => {
                postReq();
              }}
            >
              Sign up for e-Lite
            </button>
          </div>
        );
      } else {
        return (
          <div style={{ paddingTop: '20px' }}>
            <button
              onClick={() => {
                postReq();
              }}
            >
              Loading
            </button>
          </div>
        );
      }
    };

    return (
      <Layout>
        <SEO title="e-Lite Form" />
        <Container>
          <Navbar />
          <div
            style={{
              padding: '10rem 0 5rem',
            }}
          >
            <h1>e-Lite Registration Form</h1>

            <RenderMain />

            <span>
              {console.log(
                this.state.list
                  .filter(dept => {
                    return dept.selected == true;
                  })
                  .map(value => {
                    return value.name;
                  })
              )}
            </span>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default eLite;
