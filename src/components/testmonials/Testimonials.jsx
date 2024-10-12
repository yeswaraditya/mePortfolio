import React from 'react'
function Testimonals() {
  const cards = [
    { id: 1, name: 'Priya', content: 'Lorem ipsum dolor sit amet consectetur. Gravida augue est donec id risus amet sollicitudin vitae mattis. Vel leo lorem nunc quam. Elementum' },
    { id: 2, name: 'Priya', content: 'Lorem ipsum dolor sit amet consectetur. Gravida augue est donec id risus amet sollicitudin vitae mattis. Vel leo lorem nunc quam. Elementum' },
    { id: 3, name: 'Priya', content: 'Lorem ipsum dolor sit amet consectetur. Gravida augue est donec id risus amet sollicitudin vitae mattis. Vel leo lorem nunc quam. Elementum' },
  ];

  return (
    <div className="bg-black p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <div key={card.id} className="bg-black border border-[#FFFFFF] px-6 pt-3 text-white">
            <h2 className="text-xl font-bold mb-5">
              {card.name}
            <div className=''>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="13" viewBox="0 0 188 13" fill="none">
        <path d="M2 11C63.0699 4.03931 124.163 2 186 2" stroke="#FF6D00" strokeWidth="5" strokeLinecap="round" />
    </svg>
</div>
            </h2>
            <p className="text-sm text-justify mb-3">{card.content}</p>
          </div>
        ))}
      </div>
      <p className='text-white text-6xl mt-40 mb-8'>Testimonials</p>
    </div>
  );
}

export default Testimonals


{/* <div className='flex flex-col items-start'>
<div className='pt-10 sm:mt-0 sm:ms-10 text-md md:text-lg'>
    <a href="#">
        <p>Subscribe Now!</p>
    </a>
</div>
<div className='mt-0 sm:ms-10'>
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="13" viewBox="0 0 188 13" fill="none">
        <path d="M2 11C63.0699 4.03931 124.163 2 186 2" stroke="#FF6D00" strokeWidth="3" strokeLinecap="round" />
    </svg>
</div>
</div> */}