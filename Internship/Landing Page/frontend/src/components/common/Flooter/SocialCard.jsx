import React from 'react'

const SocialCard = ({title,icons}) => {
    console.log(title);
    console.log(icons);
  return (
    <div className="md:text-right">
               <h3 className="text-lg font-semibold text-slate-900 mb-5">
                 {title||"default tile"}
               </h3>
               <div className="flex md:justify-end gap-4 text-lg">
                 {
                    icons.map((icon,i)=> {
                        let Icon=icon;
                   return   <Icon key={i} className="cursor-pointer hover:text-cyan-500" />

                    })
                 }
               </div>
             </div>
  )
}

export default SocialCard
