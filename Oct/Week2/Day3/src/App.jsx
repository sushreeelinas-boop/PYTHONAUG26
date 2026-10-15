import React,


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    Count :{count}
    <br/>
    <nameContext.Provider value={"Subhankar Das"}>
     <funcContext.Provider value={setCount}>
       <Home />
    </funcContext.Provider>
     </nameContext.Provider>
    </div>
  );
}

export default App
