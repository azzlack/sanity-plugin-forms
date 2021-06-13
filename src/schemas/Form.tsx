import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWpforms} from '@fortawesome/free-brands-svg-icons'
import {FORM_DOCUMENT_NAME} from '../constants'

export default {
  title: 'Form',
  icon: () => <FontAwesomeIcon icon={faWpforms} />,
  name: FORM_DOCUMENT_NAME,
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Fields',
      name: 'fields',
      type: 'formFields',
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection: any) {
      const {name} = selection
      return {
        media: () => <FontAwesomeIcon icon={faWpforms} />,
        title: name,
      }
    },
  },
}
