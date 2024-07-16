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
    path: '/Goals',
    element: <Goals />
  },
  {
    path: '/objectives',
    element: <Objectives />
  },
  {
    path: '/Salient_feature',
    element: <Salient_feature />
  },
  {
    path: '/specialties',
    element: <Specialties />
  },
  {
    path: '/vision',
    element: <Vision />
  },
  {
    path: '/courses',
    element: <Courses />
  },
  {
    path: '/exam_cell',
    element: <Exam_cell />
  }, 
  {
    path: '/dirctor',
    element: <Director />
  },
  {
    path: '/management',
    element: <Management />
  },
  {
    path: '/principal',
    element: <Principal />
  },
  {
    path: '/Admission_form',
    element: <Admission_form />
  },
  {
    path: '/eee',
    element: <Eee />
  },
  {
    path: '/civil',
    element: <Civil />
  },
  {
    path: '/cse',
    element: <Cse />
  },
  {
    path: '/ece',
    element: <Ece />
  },
  {
    path: '/mech',
    element: <Mech />
  },
  {
    path: '/it',
    element: <IT />
  },
  {
    path: '/aids',
    element: <AIDS />
  },
  {
    path: '/industrial_safety',
    element: <Industrial_safety />
  },
  {
    path: '/structural',
    element: <Structural />
  },
  {
    path: '/laboratories',
    element: <Laboratories />
  },
  {
    path: '/library',
    element: <Library />
  }, 
  {
    path: '/transport',
    element: <Transport />
  },
  {
    path: '/computer_center',
    element: <Computer_center />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/infrastructure',
    element: <Infrastructure />
  },
  {
    path: '/aicte_documents',
    element: <AICTE_documents />
  },
  {
    path: '/extension_approvals',
    element: <Extension_approvals />
  },
  {
    path: '/mandatory_disclosure',
    element: <Mandatory_Disclosure />
  },
  {
    path: '/industrial_relation',
    element: <Industrial_relation />
  },
  {
    path: '/placement_training',
    element: <Placement_training />
  },
  {
    path: '*',
    element: <Error />
  }
])

export default router;