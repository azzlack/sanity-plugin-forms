import React, {useState} from 'react'
import styled from 'styled-components'
import DefaultPane from 'part:@sanity/components/panes/default'
import SplitController from 'part:@sanity/components/panes/split-controller'
import SplitPaneWrapper from 'part:@sanity/components/panes/split-pane-wrapper'
import PlusIcon from 'part:@sanity/base/plus-icon'
import {FORMS_PANEL_WIDTH, FORM_DOCUMENT_NAME} from '../constants'
import ListForms from './ListForms'

type Props = {
  onClose?: () => void
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

const initialForm = {
  name: {
    current: 'Choose a form',
  },
}

const Browser: React.FC<Props> = (props: Props) => {
  const {onClose} = props
  const [currentForm, setCurrentForm] = useState(initialForm)

  const menuItems = [
    {
      title: 'Create new form',
      icon: PlusIcon,
      showAsAction: true,
      intent: {type: 'create', params: {type: FORM_DOCUMENT_NAME}},
    },
  ]

  const onFormSelected = (form) => {
    setCurrentForm(form)
  }

  return (
    <Wrapper>
      <SplitController>
        <SplitPaneWrapper minSize={FORMS_PANEL_WIDTH} key="formsList">
          <DefaultPane index={0} title="Forms" menuItems={menuItems}>
            <ListForms onSelect={(form) => onFormSelected(form)} />
          </DefaultPane>
        </SplitPaneWrapper>
        <SplitPaneWrapper key="formEditor">
          <DefaultPane index={0} title={currentForm.name.current}></DefaultPane>
        </SplitPaneWrapper>
      </SplitController>
    </Wrapper>
  )
}

export default Browser
