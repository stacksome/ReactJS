import React from 'react'

const App = () => {

  const PageScroll = ()=>{
      console.log('Pgae Scrolling....');
    }

  return (
    <div onWheel={(elem)=>{
      PageScroll(elem.deltaY);
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
