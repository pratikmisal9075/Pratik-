import Expenses from "./componants/Expenses";

function App() {

  const expenses=[{id:1,title:'Car Insurance',ammount:394.21,date:new Date(2021,2,10)},
                  {id:2,title:'Mobile Insurance',ammount:594.21,date:new Date(2022,2,10)},
                  {id:3,title:'Two Wheeler Insurance',ammount:694.21,date:new Date(2023,2,10)},
                  {id:4,title:'Car Insurance',ammount:794.21,date:new Date(2024,2,10)}
                ];

  return (
   <div>
    
     <Expenses item={expenses}></Expenses>
    
   </div>
  );
}

export default App;
