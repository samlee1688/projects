import './App.css';
import ProjectRow from './components/ProjectRow';

function App() {

  const project1 = {
    projectName: "test 1",
    authorizedUsers: ["Sam"],
    hwSets: [
      {
          name: "Set 1",
          capacity: 200
      },
      {
          name: "Set 2",
          capacity:100
      }]
  }

  const project2 = {
    projectName: "test 2",
    authorizedUsers: ["Sam", "John"],
    hwSets: [
      {
          name: "Set 1",
          capacity: 200
      },
      {
          name: "Set 2",
          capacity:100
      },{
        name: "Set 3",
        capacity:100
    },{
      name: "Set 4",
      capacity:100
  }]
  }

  const projects = [project1, project2];

  return (
    <div className="App">
      <h1 className='title'>Projects Page</h1>
      {projects.map((project) => (
          <ProjectRow project={project}/>
      ))}
    </div>
  );
}

export default App;
