
const Alert: React.FC<{type: string, message: string}> = ({type, message}) => {

    let typeClass = ''

    if(type === 'error') {
        typeClass = 'border-red-500 text-red-700'
    }

    return (
        <div className={`w-full p-2 bg-red-200 rounded border text-center ${typeClass}`}>
            {message}
        </div>
    )
}

export default Alert