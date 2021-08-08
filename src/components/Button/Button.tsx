import React from 'react'

interface props {
    text: String,
    onClick?: () => void

}
function Button({ text, onClick = () => { } }: props) {
    return (
        <div onClick={onClick} className="btn-sm btn btn-action my-2 px-4 py-2">{text}</div>
    )
}

export default Button
