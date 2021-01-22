import React, { useState } from 'react';

export default function LoginDailog(props) {
  const { open, onClose } = props;

  const [state, setState] = useState(1);
  const [showPwd, setShowPwd] = useState(false);

  const handleClickState = (state) => {
    setState(state)
  }

  const handleClickShowPwd = () => {
    setShowPwd(!showPwd)
  }

  return (
    <div id="loginModal" className={`login modal p-3 ${open === true ? 'show' : 'hide'}`}>
      <div className="w-full md:w-2/3 lg:w-1/2 modal-content">
        <div className="w-full flex flex-wrap justify-start login-modal-content">
          <div className={'modal-close'} onClick={onClose}><i className={'fa fa-times'}></i></div>

          <nav className="w-full tabs flex justify-center">
            <button className={`tab ${state === 1 ? 'active' : ''}`} onClick={() => handleClickState(1)}>Login</button>
            <button className={`tab ${state === 2 ? 'active' : ''}`} onClick={() => handleClickState(2)}>SignUp</button>
          </nav>

          <div className={'w-full flex flex-wrap contact-form-content'}>
            <div className={'w-full flex flex-wrap login-input-group mt-5'}>
              <input className={'w-full flex flex-wrap login-email-input'} type={'email'} placeholder={'Email Address'}/>
            </div>
            <div className={'w-full flex flex-wrap login-input-group mt-5'}>
              <input className={'w-full flex flex-wrap login-pwd-input'} type={showPwd === false ? 'password' : 'text' } placeholder={'Email Password'}/>
              <button className={'btn-visible'} onClick={handleClickShowPwd}>show</button>
            </div>
            <button className={'btn-login'}>Login</button>

            <label className="w-full inline-flex items-center mt-10">
              <input type="checkbox" className="form-checkbox h-3 w-3 text-gray-600 checkbox" />
              <span className="checkbox-label ml-3">I agree to the Terms & Conditions</span>
            </label>

            <label className="w-full inline-flex items-center mt-5">
              <input type="checkbox" className="form-checkbox h-3 w-3 text-gray-600 checkbox" />
              <span className="checkbox-label ml-3">Quiero recibir mas información</span>
            </label>

          </div>
        </div>
      </div>
    </div>
  );
}