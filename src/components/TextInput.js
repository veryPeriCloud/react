import { IconAt } from '@tabler/icons-react';

export default function TextInput(props) {
  return (
    <label className="form-control">
      <div>
        <div className="form-label">
          <span>
            {props.label}
          </span>
          <span className='error-text'>{props.required && '*'}</span>
              
        </div>
        <div className="form-descr">{props.descr}</div>
      </div>
      
      <div className="input-wrapper">
          <span className="input-icon">
            {props.icon && <IconAt size={20} />}
          </span>

        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
          className={`input 
            ${props.disabled ? 'disabled' : ''}
            ${props.error ? 'invalid' : ''}
            ${props.size}
            rounded-${props.radius}
            ${props.icon ? 'input-with-icon' : ''}
          `} 
          />
      </div>
      <div>
        <span className='error-text'>{props.error}</span>
      </div>
    </label>
  )
}