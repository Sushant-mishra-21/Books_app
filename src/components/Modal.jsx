import React from 'react'
import imgBook from '../assests/book.jpg'
const Modal = ({show,item}) => {
  if(!show){
    return null;
  }
  let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
        
  return (
    <>
    <div className="overlay">
      <div className="overlay-inner">
        <button className='close'><i class="fa-solid fa-xmark"></i></button>
        <div className="inner-box">
          <img src={thumbnail} alt="" />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>{item.volumeInfo.authors}</h3><br/>
            <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publisedDate}</span></h4>
            <a href={item.volumeInfo.previewLink}><button>More</button></a>
          </div>
        </div>
        <h4 className="description">{item.volumeInfo.description}</h4>
      </div>
    </div>
    </>
  )
}

export default Modal