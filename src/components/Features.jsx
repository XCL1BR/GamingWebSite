import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'



const BentoTilt=({children,className = ' '})=>{
  const [transformStyle,setTransformStyle]=useState('');
  const itemRef = useRef();
   //handleMouseMove is used to handle mousemove
  const handleMouseMove =(e)=>{
    if(!itemRef.current) return;

      const {left , top , width , height}=itemRef.current.getBoundingClientRect();
          const relativeX=(e.clientX-left)/width;
          const relativeY=(e.clientY-top)/height;
 
          const tiltX=(relativeY-0.5)*8;
          const tiltY=(relativeX-0.5)*-8; 
    //const tilt
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,1,1)`;
     setTransformStyle(newTransform);
    };
const handleMouseLeave =()=>{
    setTransformStyle('');
  };
  return(
    //handlers with functionalities
    <div className={className} ref={itemRef} onMouseMove={handleMouseMove}  onMouseLeave={handleMouseLeave} style={{ transform: transformStyle}} >
      {children}
    </div>
  )
}

const BentoCard =({src, title, description})=>{
   return(
    <div className='relative size-full'>
     <video 
       src={src}
       loop
       muted
       autoPlay
       className='absolute left-0 top-0 size-full object-cover object-center'
     /> 
     <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-0.5'>
        <div>
          <h1 className='bento-title special-font text-blue-50'>
          {title}
          </h1>
          {description && (<p className=' mt-3 max-w-64 text-xs text-blue-50 opacity-50'>{description}</p>)}
          </div>    
        
    </div>  
    </div>

   )

}

const Features = () => {
  return (
    <section className='bg-black pb-52 cursor-grab'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-8'>
                <p className='font-circular-web text-lg text-blue-50' >Into The MetaGame Layer</p>
                 <p className=' max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                 Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay eXXperience on your world.
                 </p>   
                 </div>
          
         <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                 <BentoCard
                 src="videos/feature-1.mp4"
                 title={<>radia<b>n</b>t</>}
                 description='A cross-platform metagame-app,turning your activities across  Web2 and Web3 games into a rewarding adventure'
                />
         </BentoTilt>
         <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                          <BentoCard
                          src='videos/feature-2.mp4'
                          title={<>ZIG<b>M</b>A</>}
                          description='An Anime and Gaming-inspired NFT collection - the IP primed for expansion.'
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                      <BentoCard
                          src='videos/feature-3.mp4'
                          title={<>ZENT<b>H</b>O</>}
                          description='A gamified social hub , Adding a new dimension of play to social interraction for Web3 communities.'
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 me-114 md:col-span-1 md:me-0'>
                      <BentoCard
                          src='videos/feature-4.mp4'
                          title={<>ZEN<b>M</b>ART</>}
                          description='A virtual art marketplace, offering a unique and exciting way to connect with fellow creators and artists.'
                        />
                    </BentoTilt>
                    <div  className='bento-tilt_2'>
                      <BentoTilt className='flex size-full flex-col justify-between bg-violet-300 p-5'>
                        <h1 className='bento-title special-font max-w-64 text-black'>M<b>O</b>re <b>C</b>oming S<b>oo</b>n......</h1>
                         <TiLocationArrow className='m-5 scale-[5] self-end'/>
                        </BentoTilt>
                    </div>
            <BentoTilt className='bento-tilt_2'>
              <video src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className='size-full object-cover object-center'
              />

            </BentoTilt>
          </div>
        </div>
 
    </section>
  )
}

export default Features