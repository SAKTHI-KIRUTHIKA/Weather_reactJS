import React from 'react'
import '../styles/Images.css'

function Images(props) {

    const placeImage = ()=>{

        if(props.data.current.condition.code === 1000)
        {
          return 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
        }
        else if(props.data.current.condition.code >= 1003 || props.data.current.code <1030)
        {
          return 'https://cdn-icons-png.flaticon.com/512/1146/1146869.png'
        }
       
    
        else if(props.data.current.condition.code >=  1063|| props.data.current.code <1087)
        {
            return "https://cdn-icons-png.flaticon.com/512/1163/1163657.png"
        }
        else if(props.data.current.condition.code >=  1114|| props.data.current.code <1135)
        {
            return "https://cdn-icons-png.flaticon.com/512/5243/5243917.png"
        }
        else if(props.data.current.condition.code >=  1150||props.data.current.code <1207)
        {
            return "https://cdn-icons-png.flaticon.com/512/3217/3217126.png"
        }
        else if(props.data.current.condition.code >=  1210||props.data.current.code <1237)
        {
            return "https://cdn-icons-png.flaticon.com/512/642/642000.png"
        }
        
        else if(props.data.current.condition.code >=  1240|| props.data.current.code <1282)
        {
            return "https://cdn-icons-png.flaticon.com/512/71/71008.png"
        }
      }
  return (
    <>
       <img src={placeImage()} alt='image' className='icons' width='60px' height='60px'/>
    </>
  )
}

export default Images
