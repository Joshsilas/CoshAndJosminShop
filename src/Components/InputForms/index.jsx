import React from "react";

const InputForms = ({ placeholder, className }) => {
    return (
        <>
            <form>
                <input
                    id="inputForms"
                    className={className}
                    type='text'
                    placeholder={placeholder}
                />
            </form>
        </>
    );
};

export default InputForms;