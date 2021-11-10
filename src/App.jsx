import './App.css';
import TableauDashboard from './components/TableauDashboard';
// import EnhancedTableauDashboard from './components/EnhancedTableauDashboard';
const url = "http://public.tableau.com/views/RegionalSampleWorkbook/Storms"


const App =()=>  (
    <div className="App" align="center">
      <h1>Basic Tableau Embed</h1>
      <TableauDashboard url={url}/>  
      {/* <EnhancedTableauDashboard url={url}/> */}
    </div>
  );

export default App;
