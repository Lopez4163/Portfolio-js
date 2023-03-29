import React from 'react'

export const contact = () => {
  return (
    <div id='contact' className='max-auto md:pl-20 p-4 py-16'>
        <h1 className='py text-4xl font-bold text-cemter text-[#001b5e]'>
            Electronic Carrier Pigeon
        </h1>
        <form action='https://getform.io/f/f71c0e87-2a9d-4901-a3e6-5db12f766b82' 
        method='POST'
        encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4-w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm-py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm-py-2'>Phone Number</label>
                    <input 
                    className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text" 
                    name='phone'
                    />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm-py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="email" 
                    name='email'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm-py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' 
                    type="text" 
                    name='Subject'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label  className='uppercase text-sm-py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-300' 
                    rows='10' 
                    typeof='text'
                    name='message'>
                    </textarea>
                </div>
                <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                    Send Carrier Pigeon
                </button>
            </form>
        </div>
  )
}

export default contact;