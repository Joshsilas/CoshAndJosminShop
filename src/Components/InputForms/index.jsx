import React from "react";

const InputForms = ({ placeholder, className, value, onChange, type, id  }) => {
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };
    return (
        <>
            <form>
                <input
                    id={id}
                    className={className}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </form>
        </>
    );
};

export default InputForms;