interface Props {
    name : string
}
const Button: React.FC<Props> = ({name}) => {

    return (
        <button type="button" className="btn btn-dark text-dark shadow-sm bg-body-tertiary rounded" >
            {name}
        </button>
    )
}
export default Button ;