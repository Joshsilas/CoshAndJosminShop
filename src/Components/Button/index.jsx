
const Button = ({className, text, onSubmit}) => {
    return (
        <>
            <button className={className} type='submit' onClick={onSubmit}>
                {text}
            </button>
        </>
    )
}
export default Button