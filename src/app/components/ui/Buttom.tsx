interface Props {
    name : string
}
const Button: React.FC<Props> = ({name}) => {
    return (
        <button type="button" className="btn btn-outline-dark" >
            {name}
        </button>
    )
}
export default Button ;