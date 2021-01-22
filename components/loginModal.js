import React, { useEffect, useState } from 'react';
import InputGroup from '../commons/InputGroup'

export default function LoginDailog(props) {
  const { open, onClose } = props;

  return (
      <div id="myModal" className={`modal p-3 ${open === true ? 'show' : 'hide'}`}>
        <div className="w-full md:w-2/3 lg:w-1/2 modal-content">
          <div className="w-full flex flex-wrap justify-start login-modal-content">
            <div className={'modal-close'} onClick={onClose}><i className={'fa fa-times'}></i></div>
            <p className={'w-full flex flex-wrap description-title'}>Lorem Ipsum Lorem</p>
            <p className={'w-full flex flex-wrap description-content'}>Sabemos que dirigir un negocio de streaming de vídeo puede ser un desafío, por eso, nos hemos asegurado de que tengas todo lo necesario para tener éxito. Piensa en PLAYBAK como tu propio equipo de pit-stop para tu servicio de streaming de vídeo, con alojamiento ilimitado, seguridad “top of the line” y soporte las 24 horas.</p>
            <div className={'w-full flex flex-wrap contact-form-content'}>
              <InputGroup placeholder={'Input name'} textType={'text'}/>
              <InputGroup placeholder={'Input email'} textType={'email'}/>
              <button className={'btn-contact'}>Contact Now</button>
            </div>
          </div>
        </div>
      </div>
  );
}