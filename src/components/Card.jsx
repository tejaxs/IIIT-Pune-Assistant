import { BsAlarmFill  } from "react-icons/bs";


export const Card = ( {title, content = []} ) =>{

  return (
    <div className="card-container">
        <div className='card-title'>{title}</div>
        <div className='card-content'>
            {content.map((item, index) => (
              <div key={index}>
                <div  className='card-content-ele'>{content.length === 2 ? (<BsAlarmFill/>) : (<></>)}{item.text}</div>
                <br />    
              {content.length === 1 ? <img src={item.img} alt="" style={{height: '100px'}}/> : <></>}
              </div>
            ))}
        </div>
    </div>
  );
}
