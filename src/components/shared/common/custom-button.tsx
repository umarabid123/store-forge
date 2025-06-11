import React from 'react'

interface BtnProps{
AdditionalStyle ?: string,
icon ?: any,
btnText : string
}


const CustomButton:React.FC <BtnProps> = ({btnText , icon , AdditionalStyle}) => {
  return (
    <button className={`flex items-center gap-2 uppercase cursor-pointer font-mulish font-bold hover:text-zinc-600 ${AdditionalStyle}`}>
        {btnText}
        {icon}
    </button>
  )
}

export default CustomButton