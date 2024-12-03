import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
   const [currentIndex,setCurrrentIndex]=useState(1); //initial state:1
   const [hasClicked,setHasClicked]=useState(false);//initial state:false
   const [isLoading,setIsLoading]=useState(true);//initial state:true
   const [loadedVideos, setLoadedVideos] = useState(0);//initial state:0

   const totalVideos=3;//number of videos
   const nextVideoRef=useRef(null); //initial state:null
   const handleVideoLoad =() => {
    setLoadedVideos((prev)=>prev+1);
   };
   //upcomingVideoIndex ie 0%4+1=1 then  1%4+1 =2 then  2%4+1 =3 and so on till 4%4+1=1
   const upcomingVideoIndex =  (currentIndex % totalVideos)+1; 
   const handleMiniVdClick=()=>{
      setHasClicked(true);//value:true
      setCurrrentIndex(upcomingVideoIndex)
   }

useEffect(() =>{
    if(loadedVideos===totalVideos){
        setIsLoading(false);
    
    }
});



//we use GSAP to animate the videos in the  page 
 useGSAP(()=>{
 if(hasClicked){
    gsap.set('#next-video',{visibility:'visible'});
    gsap.to('#next-video',{
         transformOrigin : 'center center',
         scale:1,
         width:'100%',
         height:'100%',
         duration:1,
         ease:'power1.inOut',
         onStart:()=> nextVideoRef.current.play(),
})
gsap.from('current-video',{
    transformOrigin : 'center center',
    scale:0,
    duration:1.5,
    ease:'power1.inOut',
    onComplete:()=> gsap.set('#next-video',{visibility:'hidden'})
})
 }
 },{ dependencies:[currentIndex],revertOnUpdate:true})

useGSAP(()=>{
    gsap.set('#video-frame',{
        clipPath:'polygon(14% 0%,72% 0%,90% 90% ,0% 100%)',
        borderRadius:'0 0 40% 10%',
    })
    gsap.from('#video-frame',{
    clipPath: 'polygon(0% 0% , 100% 0% ,100% 100%,0% 100%)',
    borderRadius: '0 0 0 0 ',
    ease:'power1.inOut',
    scrollTrigger:{
        trigger: '#video-frame ',
        start:'center center ',
        end:'bottom center',
        scrub:true,
    }
    })
})






 const getVideoSrc=(index)=>`videos/hero-${index}.mp4`;


  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
     {isLoading &&(
        <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
            <div className='three-body'>
                {/* three-body underscrore underscore dot */}
               <div className='three-body__dot' />
               <div className='three-body__dot' />
               <div className='three-body__dot' />
            </div>
        </div>
     )}

        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
               <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                 <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100' >
                    <video ref={nextVideoRef} 
                           src={getVideoSrc(upcomingVideoIndex)}
                           loop
                           muted
                           id='current-video'
                           className='size-64 origin-center scale-150 object-cover object-center'
                           onLoadedData={handleVideoLoad}
                    />

                </div>       
               </div>
               <video 
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)} 
                    loop
                    muted
                    id='next-video'
                    className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                    onLoadedData={handleVideoLoad}
               />
               <video 
                src={getVideoSrc(currentIndex === totalVideos-1 ? 1 : currentIndex)}
                 autoPlay
                 loop
                 muted
                 className='absolute left-0 top-0 size-full object-cover object-center'
                 onLoadedData={handleVideoLoad} //handle video load
                />
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 '>
                G<b>A</b>MING
            </h1>
            <div className='absolute left-0 top-0 z-40 size-full'>
                <div className='mt-24 px-5 sm:px-10'>
                    <h1 className='special-font hero-heading text-blue-100'>
                        redefi<b>n</b>e</h1>
                   <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Enter The MetaGame Layer <br/>Unleash The Play Economy</p>
                   <Button id='watch-trailer' title = 'Watch Trailer' leftIcon={<TiLocationArrow />}
                  containerClass='bg-yellow-300 flex-center gap-1' />
                
                </div>
            </div>
        </div>
        <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black '>
                G<b>A</b>MING
            </h1>
    </div>
  )
}

export default Hero

