import "./SelectedPg.css";
export default function SelectedPg() {
  return (
    <div className="workwrapper">
      <div className="project proj1 flex items-center">
        <h3 className="flex-1">Project 1</h3>
      </div>
      <div className="project proj2 flex items-center">
        <div className="flex-1">
          <h3 className="flex-1">Project 2</h3>
          <h5>reactjs, socketio, context api, nodejs, express</h5>
        </div>
      </div>
      <div className="project proj3 flex items-center">
        <h3 className="flex-1">Project 3</h3>
      </div>
      <div className="project proj4 flex items-center border-b-2 ">
        <h3 className="flex-1">Project 4</h3>
      </div>
    </div>
  );
}
