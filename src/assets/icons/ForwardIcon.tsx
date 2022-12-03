import React from 'react'

interface ForwardIconProps {
    onClick: () => void
}

const ForwardIcon = ({ onClick }: ForwardIconProps) => {
    return (
        <svg onClick={onClick} className='fill-white w-[18px] h-[18px] md:w-[22px] md:h-[22px] cursor-pointer' viewBox="-0.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m0 22.835v-21.665c0-.007 0-.015 0-.024 0-.63.511-1.141 1.141-1.141.201 0 .391.052.555.144l-.006-.003 18.71 10.493v-10.038c0-.331.268-.6.599-.6h1.2c.332 0 .6.269.6.6v22.799.001c0 .331-.268.599-.599.599h-.001-1.2c-.331 0-.599-.268-.599-.599v-.001-10.038l-18.71 10.494c-.158.091-.347.145-.548.145-.632-.007-1.142-.521-1.142-1.155 0-.004 0-.008 0-.011v.001z" /></svg>
    )
}

export default ForwardIcon