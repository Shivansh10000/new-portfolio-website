import React from 'react'
import college from '../assets/imgdtu.png'
import school from '../assets/vbpsimg.png'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800
     to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea rem ipsum, nihil repellendus corrupti qui minima saepe voluptate dolorem, tempore unde quibusdam? Voluptate maiores inventore magnam rerum sunt eveniet accusantium deserunt repudiandae. Hic amet in doloribus? Ab possimus beatae modi, doloremque, accusantium provident labore reprehenderit placeat, ipsum qui aliquam.
                </p>

                <br />

                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                    <div className="flex flex-col justify-center h-full">
                        <div className='flex flex-col justify-center h-full px-4 md:flex-col'>
                            <p className='text-xl mt-5'>Delhi Technological University</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos, numquam repellendus exercitationem et vero cum tempora similique cumque nobis!</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={college} alt=""  width={300} height={100} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <div  className='flex flex-col justify-center h-full px-4 md:flex-col'>
                            <p className='text-xl mt-5'>VBPS</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos, numquam repellendus exercitationem et vero cum tempora similique cumque nobis!</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={school} alt="" width={300} height={100}/>
                        </div>
                    </div>
                </div>

                <br />

            </div>
        </div>
    )
}

export default About