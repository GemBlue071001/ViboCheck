import ReactGridLayout, { useContainerWidth } from 'react-grid-layout';
import './App.css'

function App() {
  const { width, containerRef, mounted } = useContainerWidth();
  const layout = [
    { i: "1", x: 0, y: 0, w: 1, h: 1 },
    { i: "2", x: 1, y: 0, w: 3, h: 1 },
    { i: "3", x: 4, y: 0, w: 1, h: 1 },
    { i: "4", x: 4, y: 1, w: 1, h: 1 },
    { i: "5", x: 4, y: 1, w: 1, h: 1 },
    { i: "6", x: 4, y: 2, w: 1, h: 1 },
    { i: "7", x: 4, y: 3, w: 1, h: 1 },
    { i: "8", x: 4, y: 4, w: 1, h: 1 }
  ];
  return (
    <>
      <h1>vibocheck</h1>
      <div className='home-container'>

        <div className='profile-section'>
          <h1>profile</h1>
        </div>


        <div className='widget-section' style={{ border: '1px solid black' }} ref={containerRef}>
          {mounted && (
            <ReactGridLayout
              layout={layout}
              width={width}
              gridConfig={{ cols: 12, rowHeight: 100 }}
            >
              <div style={{ border: '1px solid black' }} key="1">a</div>
              <div style={{ border: '1px solid black' }} key="2">b</div>
              <div style={{ border: '1px solid black' }} key="3">c</div>
              <div style={{ border: '1px solid black' }} key="4">d</div>
              <div style={{ border: '1px solid black' }} key="5">e</div>
              <div style={{ border: '1px solid black' }} key="6">f</div>
              <div style={{ border: '1px solid black' }} key="7">g</div>
              <div style={{ border: '1px solid black' }} key="8">h</div>
            </ReactGridLayout>
          )}
        </div>
      </div>


    </>
  )
}

export default App
