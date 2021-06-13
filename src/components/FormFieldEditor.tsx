import React, {useEffect, useState, forwardRef, Ref} from 'react'
import ErrorOutlineIcon from 'part:@sanity/base/error-outline-icon'
import WarningOutlineIcon from 'part:@sanity/base/warning-outline-icon'
import FormField from 'part:@sanity/components/formfields/default'
import {FormsField} from '../types/forms'
import {useId} from '@reach/auto-id'
import styled from 'styled-components'
import {TextInput, Card, Text, Stack, Flex, Box} from '@sanity/ui'

type FormFieldEditorProps = {
  form: FormsField
  onChange: (data: FormsField) => void
}

const FormFieldEditor: React.FC<FormFieldEditorProps> = (
  {form, onChange}: FormFieldEditorProps,
  ref: Ref<HTMLDivElement>
) => {
  const labelInputId = useId()

  const onLabelChanged = (e) => {
    if (onChange) {
      form.label = e.target.value

      onChange(form)
    }
  }

  return (
    <Stack padding={1}>
      <Flex direction="column">
        <Box paddingBottom={2}>
          <Text htmlFor={labelInputId} size={1} style={{fontWeight: 600}}>
            Name
          </Text>
        </Box>
        <TextInput id={labelInputId} value={form.label} onChange={onLabelChanged} />
      </Flex>
    </Stack>
  )
}

export default FormFieldEditor
