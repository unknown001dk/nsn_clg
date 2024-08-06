import { createBrowserRouter }  from 'react-router-dom';
import { Suspense } from 'react';
import {Principal} from './Lazy.jsx';
import Preloader from '../utils/Preloader.jsx';
import { Error, Home, AICTE_documents, Contact, Extension_approvals, Mandatory_Disclosure, Infrastructure, Events, Admission_form, Industrial_relation, Placement_training, Goals, Salient_feature, Objectives, Specialties, Vision, Courses, Exam_cell, Director, Management, Eee, Civil, Cse, Ece, Mech, IT, AIDS, Industrial_safety, Structural, Laboratories, Library, Transport, Computer_center } from './Lazy.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Preloader />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: '/contact',
    element: (
      <Suspense fallback={<Preloader />}>
        <Contact />
      </Suspense>
    )
  },
  {
    path: '/about/goals',
    element: (
      <Suspense fallback={<Preloader />}>
        <Goals />
      </Suspense>
    )
  },
  {
    path: '/about/objectives',
    element: (
      <Suspense fallback={<Preloader />}>
        <Objectives />
      </Suspense>
    )
  },
  {
    path: '/about/Salient_feature',
    element: (
      <Suspense fallback={<Preloader />}>
        <Salient_feature />
      </Suspense>
    )
  },
  {
    path: '/about/specialties',
    element: (
      <Suspense fallback={<Preloader />}>
        <Specialties />
      </Suspense>
    )
  },
  {
    path: '/about/vision',
    element: (
      <Suspense fallback={<Preloader />}>
        <Vision />
      </Suspense>
    )
  },
  {
    path: '/academics/courses',
    element: (
      <Suspense fallback={<Preloader />}>
        <Courses />
      </Suspense>
    )
  },
  {
    path: '/academics/exam_cell',
    element: (
      <Suspense fallback={<Preloader />}>
        <Exam_cell />
      </Suspense>
    )
  }, 
  {
    path: '/administration/dirctor',
    element: (
      <Suspense fallback={<Preloader />}>
        <Director />
      </Suspense>
    )
  },
  {
    path: '/administration/management',
    element: (
      <Suspense fallback={<Preloader />}>
        <Management />
      </Suspense>
    )
  },
  {
    path: '/administration/principal',
    element: (
      <Suspense fallback={<Preloader />}>
        <Principal />
      </Suspense>
    )
  },
  {
    path: '/admission/Admission_form',
    element: (
      <Suspense fallback={<Preloader />}>
        <Admission_form />
      </Suspense>
    )
  },
  {
    path: '/department/BE/eee',
    element: (
      <Suspense fallback={<Preloader />}>
        <Eee />
      </Suspense>
    )
  },
  {
    path: '/department/BE/civil',
    element: (
      <Suspense fallback={<Preloader />}>
        <Civil />
      </Suspense>
    )
  },
  {
    path: '/department/BE/cse',
    element: (
      <Suspense fallback={<Preloader />}>
        <Cse />
      </Suspense>
    )
  },
  {
    path: '/department/BE/ece',
    element: (
      <Suspense fallback={<Preloader />}>
        <Ece />
      </Suspense>
    )
  },
  {
    path: '/department/BE/mech',
    element: (
      <Suspense fallback={<Preloader />}>
        <Mech />
      </Suspense>
    )
  },
  {
    path: '/department/BTech/it',
    element: (
      <Suspense fallback={<Preloader />}>
        <IT />
      </Suspense>
    )
  },
  {
    path: '/department/BTech/aids',
    element: (
      <Suspense fallback={<Preloader />}>
        <AIDS />
      </Suspense>
    )
  },
  {
    path: '/department/ME/industrial_safety',
    element: (
      <Suspense fallback={<Preloader />}>
        <Industrial_safety />
      </Suspense>
    )
  },
  {
    path: '/department/ME/structural',
    element: (
      <Suspense fallback={<Preloader />}>
        <Structural />
      </Suspense>
    )
  },
  {
    path: '/facilities/laboratories',
    element: (
      <Suspense fallback={<Preloader />}>
        <Laboratories />
      </Suspense>
    )
  },
  {
    path: '/facilities/library',
    element: (
      <Suspense fallback={<Preloader />}>
        <Library />
      </Suspense>
    )
  }, 
  {
    path: '/facilities/transport',
    element: (
      <Suspense fallback={<Preloader />}>
        <Transport />
      </Suspense>
    )
  },
  {
    path: '/facilities/computer_center',
    element: (
      <Suspense fallback={<Preloader />}>
        <Computer_center />
      </Suspense>
    )
  },
  {
    path: '/gallery/events',
    element: (
      <Suspense fallback={<Preloader />}>
        <Events />
      </Suspense>
    )
  },
  {
    path: '/gallery/infrastructure',
    element: (
      <Suspense fallback={<Preloader />}>
        <Infrastructure />
      </Suspense>
    )
  },
  {
    path: '/mandatory_doc/aicte_documents',
    element: (
      <Suspense fallback={<Preloader />}>
        <AICTE_documents />
      </Suspense>
    )
  },
  {
    path: '/mandatory_doc/extension_approvals',
    element: (
      <Suspense fallback={<Preloader />}>
        <Extension_approvals />
      </Suspense>
    )
  },
  {
    path: '/mandatory_doc/mandatory_disclosure',
    element: (
      <Suspense fallback={<Preloader />}>
        <Mandatory_Disclosure />
      </Suspense>
    )
  },
  {
    path: '/placement/industrial_relation',
    element: (
      <Suspense fallback={<Preloader />}>
        <Industrial_relation />
      </Suspense>
    )
  },
  {
    path: '/placement/placement_training',
    element: (
      <Suspense fallback={<Preloader />}>
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