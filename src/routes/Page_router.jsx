import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import {
  AboutNSN,
  Administration,
  AdminPanel,
  AdmissionPage,
  AssociationPage,
  BusCard,
  BusDetails,
  BusDetailsPage,
  CollegeFacilities,
  ContactPage,
  DepartmentDetails,
  DepartmentList,
  Faculty,
  GalleryPages,
  IDCardDetails,
  LoginForm,
  Main,
  MemberList,
  Placement,
  // placementPage,
  // GalleryPage,
  RouteChangingForm,
  StudentRegister,
  TransportOfficers,
  TransportPage,
} from "./Lazy.jsx";
import Preloader from "../utils/Preloader.jsx";
import {
  Error,
  Home,
  AICTE_documents,
  Contact,
  Extension_approvals,
  Mandatory_Disclosure,
  Infrastructure,
  Events,
  Admission_form,
  Industrial_relation,
  Placement_training,
  Goals,
  Salient_feature,
  Objectives,
  Specialties,
  Vision,
  Courses,
  Exam_cell,
  Director,
  Management,
  Principal,
  Eee,
  Civil,
  Cse,
  Ece,
  Mech,
  IT,
  AIDS,
  Industrial_safety,
  Structural,
  Laboratories,
  Library,
  Transport,
  Computer_center,
  AdmissionFormModal,
} from "./Lazy.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Suspense fallback={<Preloader />}><Home /></Suspense>} />
    <Route path="/transport" element={<Suspense fallback={<Preloader />}><TransportPage /></Suspense>} />
    <Route path="/student-register" element={<Suspense fallback={<Preloader />}><StudentRegister /></Suspense>} />
    <Route path="/id-card-details" element={<Suspense fallback={<Preloader />}><IDCardDetails /></Suspense>} />
    <Route path="/transport-officers" element={<Suspense fallback={<Preloader />}><TransportOfficers /></Suspense>} />
    <Route path="/bus-route-details" element={<Suspense fallback={<Preloader />}><BusDetails /></Suspense>} />
    <Route path="/route-changing-form" element={<Suspense fallback={<Preloader />}><RouteChangingForm /></Suspense>} />
    <Route path="/admin" element={<Suspense fallback={<Preloader />}><Main /></Suspense>} />
    <Route path="/admin-pannel" element={<Suspense fallback={<Preloader />}><AdminPanel /></Suspense>} />
    <Route path="/bus-card" element={<Suspense fallback={<Preloader />}><BusCard /></Suspense>} />
    <Route path="/bus/:id" element={<Suspense fallback={<Preloader />}><BusDetailsPage /></Suspense>} />
    <Route path="/contact-page" element={<Suspense fallback={<Preloader />}><ContactPage /></Suspense>} />
    <Route path="/placement" element={<Suspense fallback={<Preloader />}><Placement /></Suspense>} />
    <Route path="/department-page" element={<Suspense fallback={<Preloader />}><DepartmentList /></Suspense>} />
    <Route path="/departments/:deptId" element={<Suspense fallback={<Preloader />}><DepartmentDetails /></Suspense>} />
    <Route path="/faculty/:deptId" element={<Suspense fallback={<Preloader />}><Faculty /></Suspense>} />
    <Route path="/:deptId/association" element={<Suspense fallback={<Preloader />}><AssociationPage /></Suspense>} />
    <Route path="/facilities" element={<Suspense fallback={<Preloader />}><CollegeFacilities /></Suspense>} />
    <Route path="/administration" element={<Suspense fallback={<Preloader />}><Administration /></Suspense>} />
    <Route path="/admission-page" element={<Suspense fallback={<Preloader />}><AdmissionPage /></Suspense>} />
    <Route path="/member-list" element={<Suspense fallback={<Preloader />}><MemberList /></Suspense>} />
    <Route path="/gallery" element={<Suspense fallback={<Preloader />}><GalleryPages /></Suspense>} />
    <Route path="/login-form" element={<Suspense fallback={<Preloader />}><LoginForm /></Suspense>} />
    <Route path="/about-nsn" element={<Suspense fallback={<Preloader />}><AboutNSN /></Suspense>} />
    <Route path="/contact" element={<Suspense fallback={<Preloader />}><Contact /></Suspense>} />
    <Route path="/about/goals" element={<Suspense fallback={<Preloader />}><Goals /></Suspense>} />
    <Route path="/about/objectives" element={<Suspense fallback={<Preloader />}><Objectives /></Suspense>} />
    <Route path="/about/Salient_feature" element={<Suspense fallback={<Preloader />}><Salient_feature /></Suspense>} />
    <Route path="/about/specialties" element={<Suspense fallback={<Preloader />}><Specialties /></Suspense>} />
    <Route path="/about/vision" element={<Suspense fallback={<Preloader />}><Vision /></Suspense>} />
    <Route path="/academics/courses" element={<Suspense fallback={<Preloader />}><Courses /></Suspense>} />
    <Route path="/academics/exam_cell" element={<Suspense fallback={<Preloader />}><Exam_cell /></Suspense>} />
    <Route path="/administration/dirctor" element={<Suspense fallback={<Preloader />}><Director /></Suspense>} />
    <Route path="/administration/management" element={<Suspense fallback={<Preloader />}><Management /></Suspense>} />
    <Route path="/administration/principal" element={<Suspense fallback={<Preloader />}><Principal /></Suspense>} />
    <Route path="/admission/Admission_form" element={<Suspense fallback={<Preloader />}><Admission_form /></Suspense>} />
    <Route path="/AdmissionFormModal" element={<Suspense fallback={<Preloader />}><AdmissionFormModal /></Suspense>} />
    <Route path="/department/BE/eee" element={<Suspense fallback={<Preloader />}><Eee /></Suspense>} />
    <Route path="/department/BE/civil" element={<Suspense fallback={<Preloader />}><Civil /></Suspense>} />
    <Route path="/department/BE/cse" element={<Suspense fallback={<Preloader />}><Cse /></Suspense>} />
    <Route path="/department/BE/ece" element={<Suspense fallback={<Preloader />}><Ece /></Suspense>} />
    <Route path="/department/BE/mech" element={<Suspense fallback={<Preloader />}><Mech /></Suspense>} />
    <Route path="/department/BTech/it" element={<Suspense fallback={<Preloader />}><IT /></Suspense>} />
    <Route path="/department/BTech/aids" element={<Suspense fallback={<Preloader />}><AIDS /></Suspense>} />
    <Route path="/department/ME/industrial_safety" element={<Suspense fallback={<Preloader />}><Industrial_safety /></Suspense>} />
    <Route path="/department/ME/structural" element={<Suspense fallback={<Preloader />}><Structural /></Suspense>} />
    <Route path="/facilities/laboratories" element={<Suspense fallback={<Preloader />}><Laboratories /></Suspense>} />
    <Route path="/facilities/library" element={<Suspense fallback={<Preloader />}><Library /></Suspense>} />
    <Route path="/facilities/transport" element={<Suspense fallback={<Preloader />}><Transport /></Suspense>} />
    <Route path="/facilities/computer_center" element={<Suspense fallback={<Preloader />}><Computer_center /></Suspense>} />
    <Route path="/gallery/events" element={<Suspense fallback={<Preloader />}><Events /></Suspense>} />
    <Route path="/gallery/infrastructure" element={<Suspense fallback={<Preloader />}><Infrastructure /></Suspense>} />
    <Route path="/mandatory_doc/aicte_documents" element={<Suspense fallback={<Preloader />}><AICTE_documents /></Suspense>} />
    <Route path="/mandatory_doc/extension_approvals" element={<Suspense fallback={<Preloader />}><Extension_approvals /></Suspense>} />
    <Route path="/mandatory_doc/mandatory_disclosure" element={<Suspense fallback={<Preloader />}><Mandatory_Disclosure /></Suspense>} />
    <Route path="/placement/industrial_relation" element={<Suspense fallback={<Preloader />}><Industrial_relation /></Suspense>} />
    <Route path="/placement/placement_training" element={<Suspense fallback={<Preloader />}><Placement_training /></Suspense>} />
    <Route path="*" element={<Suspense fallback={<div>Error: Page Not Found</div>}><Error /></Suspense>} />
  </Routes>
);

export default AppRoutes;
