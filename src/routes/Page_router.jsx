import { createBrowserRouter }  from 'react-router-dom';
import { Suspense } from 'react';
import {Principal} from './Lazy.jsx';
import { Error, Home, AICTE_documents, Contact, Extension_approvals, Mandatory_Disclosure, Infrastructure, Events, Admission_form, Industrial_relation, Placement_training, Goals, Salient_feature, Objectives, Specialties, Vision, Courses, Exam_cell, Director, Management, Eee, Civil, Cse, Ece, Mech, IT, AIDS, Industrial_safety, Structural, Laboratories, Library, Transport, Computer_center } from './Lazy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    )
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    )
  },
  {
    path: '/about/goals',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Goals />
      </Suspense>
    )
  },
  {
    path: '/about/objectives',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Objectives />
      </Suspense>
    )
  },
  {
    path: '/about/Salient_feature',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Salient_feature />
      </Suspense>
    )
  },
  {
    path: '/about/specialties',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Specialties />
      </Suspense>
    )
  },
  {
    path: '/about/vision',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Vision />
      </Suspense>
    )
  },
  {
    path: '/academics/courses',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Courses />
      </Suspense>
    )
  },
  {
    path: '/academics/exam_cell',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Exam_cell />
      </Suspense>
    )
  }, 
  {
    path: '/administration/dirctor',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Director />
      </Suspense>
    )
  },
  {
    path: '/administration/management',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Management />
      </Suspense>
    )
  },
  {
    path: '/administration/principal',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Principal />
      </Suspense>
    )
  },
  {
    path: '/admission/Admission_form',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Admission_form />
      </Suspense>
    )
  },
  {
    path: '/department/BE/eee',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Eee />
      </Suspense>
    )
  },
  {
    path: '/department/BE/civil',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Civil />
      </Suspense>
    )
  },
  {
    path: '/department/BE/cse',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Cse />
      </Suspense>
    )
  },
  {
    path: '/department/BE/ece',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Ece />
      </Suspense>
    )
  },
  {
    path: '/department/BE/mech',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Mech />
      </Suspense>
    )
  },
  {
    path: '/department/BTech/it',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <IT />
      </Suspense>
    )
  },
  {
    path: '/department/BTech/aids',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AIDS />
      </Suspense>
    )
  },
  {
    path: '/department/ME/industrial_safety',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Industrial_safety />
      </Suspense>
    )
  },
  {
    path: '/department/ME/structural',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Structural />
      </Suspense>
    )
  },
  {
    path: '/facilities/laboratories',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Laboratories />
      </Suspense>
    )
  },
  {
    path: '/facilities/library',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Library />
      </Suspense>
    )
  }, 
  {
    path: '/facilities/transport',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Transport />
      </Suspense>
    )
  },
  {
    path: '/facilities/computer_center',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Computer_center />
      </Suspense>
    )
  },
  {
    path: '/gallery/events',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
    )
  },
  {
    path: '/gallery/infrastructure',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Infrastructure />
      </Suspense>
    )
  },
  {
    path: '/mandatory_doc/aicte_documents',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AICTE_documents />
      </Suspense>
    )
  },
  {
    path: '/mandatory_doc/extension_approvals',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Extension_approvals />
      </Suspense>
    )
  },
  {
    path: '/mandatory_doc/mandatory_disclosure',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Mandatory_Disclosure />
      </Suspense>
    )
  },
  {
    path: '/placement/industrial_relation',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Industrial_relation />
      </Suspense>
    )
  },
  {
    path: '/placement/placement_training',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Placement_training />
      </Suspense>
    )
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Error: Page Not Found</div>}>
        <Error />
      </Suspense>
    )
  }
])

export default router;