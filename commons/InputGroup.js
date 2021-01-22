import React from 'react'

export default function InputGroup(props){
  const {placeholder, textType='text', name='', id='', } = props;
  const [warningState, setWarningState] = React.useState(false);
  return (
    <div className={'w-full flex flex-wrap input-group'}>
      <input placeholder={placeholder} type={textType} name={name} id={id}/>
      {warningState && <span className={'warning-msg'}>Incorrect</span>}
      {warningState && <i className={'fa fa-warning warning-icon'}></i>}
    </div>
  )
}