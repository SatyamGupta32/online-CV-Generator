import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Input = ({ value, onChange, label, placeholder, type , autocomplete}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglrShowPassword = () => {
        setShowPassword(!showPassword);
    }
      const getPlaceholder = () => {
    if (type === 'password') {
      return showPassword ? 'Enter password' : '•••••••••';
    }
    return placeholder;
  };
    return (
        <div>
            <label className="text-[13px] text-slate-800">{label}</label>

            <div className='input-box'>
                <input
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    value={value}
                    className={`w-full bg-transparent outline-none ${!showPassword && type === 'password' ? 'font-extrabold tracking-[3px]' : 'font-normal tracking-normal'}`}
                    onChange={onChange}
                    placeholder={getPlaceholder()}
                    autocomplete={autocomplete}
                />
                {type === 'password' && (
                    <>
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className='tex-primary cursor-pointer'
                                onClick={togglrShowPassword}
                            />
                        ) : (
                            <FaRegEyeSlash
                                size={22}
                                className='text-slate-400
                                cursor-pointer'
                                onClick={togglrShowPassword}
                            />
                        )}
                    </>
                )}
            </div>
        </div >
    )
}

export default Input
