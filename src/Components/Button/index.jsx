
const Button = ({className, text, onClick}) => {
    return (
        <>
            <button className={className} type='button' onClick={onClick}>
                {text}
            </button>
        </>
    )
}
export default Button