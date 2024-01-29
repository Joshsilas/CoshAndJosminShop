import React from "react";

const InputForms = ({ placeholder, className, value, onChange  }) => {
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };
    return (
        <>
            <form>
                <input
                    id="inputForms"
                    className={className}
                    type='text'
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </form>
        </>
    );
};

export default InputForms;