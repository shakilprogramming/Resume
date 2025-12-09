import React from 'react'


type Props ={
    name: string;
    image: string;
    role: string;

}
const ClientReviewCard = ({image, name, role}:Props) => {
  return (
    <div className='m-2'>
        <Image src={image} alt="client" width={60} height={60} all="client" width={60} height={60} className="rounded-full" />
        ClientReviewCard</div>
        <p className='mt-6 text-base text-gray-200 font-medium'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique a facilis unde possimus incidunt quod! Odit est ut assumenda accusantium. Laudantium debitis tempore fugit voluptates, nesciunt tempora autem commodi?
        </p>
        <h1 className='mt-6 text-xl font-bold text-cyan-200'>{name}</h1>
        <p className='mt-1 text-white'>{role}</p>
        </div>
  )
}

export default ClientReviewCard;