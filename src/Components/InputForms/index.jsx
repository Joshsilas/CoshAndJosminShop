import React from "react";

const InputForms = ({ placeholder, className, value, onChange, type, id, onSubmit  }) => {
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
        };

    const handleSubmit = (event) => {
    event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    id={id}
                    className={className}
                    onSubmit={onSubmit}
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