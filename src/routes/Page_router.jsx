import { createBrowserRouter }  from 'react-router-dom';
import { Goals, Salient_feature, Objectives, Specialties, Vision } from '../pages/about/inc.jsx';
import { Courses, Exam_cell } from '../pages/academics/inc.jsx';
import { Director, Management, Principal } from '../pages/administration/inc.jsx';
import { Eee, Civil, Cse, Ece, Mech, IT, AIDS, Industrial_safety, Structural } from '../pages/department/inc.jsx';
import { Laboratories, Library, Transport, Computer_center } from '../pages/facilities/inc.jsx';
import { Events, Infrastructure } from '../pages/gallery/inc.jsx';
import { AICTE_documents, Extension_approvals, Mandatory_Disclosure } from '../pages/mandatory_documents/inc.jsx';
import { Industrial_relation, Placement_training } from '../pages/placement/inc.jsx';
import Admission_form from '../pages/admission/Admission_form.jsx';
import Home from '../pages/Home.jsx';
import Error from '../components/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about/goals',
    element: <Goals />
  },
  {
    path: '/about/objectives',
    element: <Objectives />
  },
  {
    path: '/about/Salient_feature',
    element: <Salient_feature />
  },
  {
    path: '/about/specialties',
    element: <Specialties />
  },
  {
    path: '/about/vision',
    element: <Vision />
  },
  {
    path: '/academics/courses',
    element: <Courses />
  },
  {
    path: '/academics/exam_cell',
    element: <Exam_cell />
  }, 
  {
    path: '/administration/dirctor',
    element: <Director />
  },
  {
    path: '/administration/management',
    element: <Management />
  },
  {
    path: '/administration/principal',
    element: <Principal />
  },
  {
    path: '/admission/Admission_form',
    element: <Admission_form />
  },
  {
    path: '/department/BE/eee',
    element: <Eee />
  },
  {
    path: '/department/BE/civil',
    element: <Civil />
  },
  {
    path: '/department/BE/cse',
    element: <Cse />
  },
  {
    path: '/department/BE/ece',
    element: <Ece />
  },
  {
    path: '/department/BE/mech',
    element: <Mech />
  },
  {
    path: '/department/BTech/it',
    element: <IT />
  },
  {
    path: '/department/BTech/aids',
    element: <AIDS />
  },
  {
    path: '/department/ME/industrial_safety',
    element: <Industrial_safety />
  },
  {
    path: '/department/ME/structural',
    element: <Structural />
  },
  {
    path: '/facilities/laboratories',
    element: <Laboratories />
  },
  {
    path: '/facilities/library',
    element: <Library />
  }, 
  {
    path: '/facilities/transport',
    element: <Transport />
  },
  {
    path: '/facilities/computer_center',
    element: <Computer_center />
  },
  {
    path: '/gallery/events',
    element: <Events />
  },
  {
    path: '/gallery/infrastructure',
    element: <Infrastructure />
  },
  {
    path: '/mandatory_doc/aicte_documents',
    element: <AICTE_documents />
  },
  {
    path: '/mandatory_doc/extension_approvals',
    element: <Extension_approvals />
  },
  {
    path: '/mandatory_doc/mandatory_disclosure',
    element: <Mandatory_Disclosure />
  },
  {
    path: '/placement/industrial_relation',
    element: <Industrial_relation />
  },
  {
    path: '/placement/placement_training',
    element: <Placement_training />
  },
  {
    path: '*',
    element: <Error />
  }
])

export default router;