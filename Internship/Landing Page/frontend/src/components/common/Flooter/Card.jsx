import React from 'react'

const Card = ({ title, links }) => {
    return (
        <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
                {title || "default"}
            </h3>

            <ul className="space-y-3 text-gray-500">
                {
                    links?.map(e => <li><a href="#" className="hover:text-cyan-500">{e || "defualt"}</a></li>
                    )
                }

            </ul>
        </div>
    )
}

export default Card
