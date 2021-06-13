import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWpforms} from '@fortawesome/free-brands-svg-icons'

import FormsBrowser from './components/FormsBrowser'

export default {
  name: 'forms',
  title: 'Forms',
  component: FormsBrowser,
  icon: () => <FontAwesomeIcon icon={faWpforms} />,
}
