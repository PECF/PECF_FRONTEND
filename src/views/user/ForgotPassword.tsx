import React, { Fragment, useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
//importar iconos de mailing
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert"; //Habra que agregar react alert??
import MetaData from "../layout/MetaData"; 
import { forgotPassword } from "../../stores/actions/userAction";
import { clearErrors } from "../../stores/actions/productAction";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { error, message, loading } = useSelector(
    (state : any) => state.forgotPassword
    );
    
    const [email, setEmail] = useState("");
    
    const forgotPasswordSubmit = (e : any) => {
      e.preventDefault();
      const myForm = new FormData();
      
      myForm.set("email", email);
      dispatch(forgotPassword(myForm));
    };
    
useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch(clearErrors());
  }
  if (message) {
    alert.success(message);
  }
}, [dispatch, error, alert, message]);

return (
  <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="Forgot Password" />
        <div >
          <div >
            <h2 >Forgot Password</h2>

            <form
              onSubmit={forgotPasswordSubmit}
            >
              <div >
                {/* INSERTAR ICONO DE MAILING */}
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Send"
                className="forgotPasswordBtn"
              />
            </form>
          </div>
        </div>
      </Fragment>
    )}
  </Fragment>
);
};

export default ForgotPassword;