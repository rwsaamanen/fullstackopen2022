import React from 'react'

const Language = ({ language }) => {
    console.log(language)
    return(
        <div>
            <li>
                <strong>
                    <i>{language}</i>
                </strong>
            </li>
        </div>
    )
}


export default Language