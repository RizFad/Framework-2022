import logo from './logo.svg';
import './App.css';
import CreateTodo from './containers/CreateTodo';
import Table from './containers/Table';

function App() {
  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="card">
        <div className="card-header">
          <p>Name : RIZQY GHANIYYU FADHILAH, 1941720112</p>
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
              Input your to do List  
            </blockquote>
            <CreateTodo/>
            <Table/>
        </div>
      </div>
    </div>
  );
}

export default App;