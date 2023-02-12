import { Route, Routes } from "react-router-dom";
import { Anouncements } from "./pages/Anouncements";
import { Courses } from "./pages/courses/Courses";
import { Materials } from "./pages/courses/Materials";
import { MaterialsDetails } from "./pages/courses/MaterialsDetails";
import { Ratings } from "./pages/courses/Ratings";
import { Students } from "./pages/courses/Students";
import { StudentsDetails } from "./pages/courses/StudentsDetails";
import { Late } from "./pages/detailsPage/Late";
import { Submitted } from "./pages/detailsPage/Submitted";
import { Waiting } from "./pages/detailsPage/Waiting";
import { Notifications } from "./pages/Notifications";
import { Schedule } from "./pages/Schedule";
import { SideBar } from "./pages/SideBar";
function App() {
  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="/" element={<SideBar />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/anouncements" element={<Anouncements />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/courses/materials" element={<Materials />} />
        <Route path="/courses/materials/:id" element={<MaterialsDetails />}>
          <Route path="details/:Id" element={<Late />} />
          <Route path="details/:Id" element={<Submitted />} />
          <Route path="details:Id" element={<Waiting />} />
        </Route>
        <Route path="/courses/students" element={<Students />} />
        <Route path="/courses/students/:id" element={<StudentsDetails />} />
        <Route path="/courses/ratings" element={<Ratings />} />
      </Routes>
    </div>
  );
}

export default App;
