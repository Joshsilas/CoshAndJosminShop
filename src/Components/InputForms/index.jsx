import React from "react";

const InputForms = ({ handleSearch, handleClearClick, clearSearchBar }) => {

    return (
        <>
            <form>
                <input
                    className='search'
                    type='input'
                    placeholder="What would you like to find"
                    value={}
                    onChange={}
                />
            </form>
        </>
    );
};

export default InputForms;