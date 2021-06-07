import React from 'react'

export const Home = (props: {name: string}) => {
    return (
        <div>
            {props.name ? `Hi ${props.name}`:`You are not Authenticated!`}
        </div>
    )
}
