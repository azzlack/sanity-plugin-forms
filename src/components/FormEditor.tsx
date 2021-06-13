import React, {useEffect, useState, forwardRef, Ref} from 'react'
import PatchEvent, {set, setIfMissing} from '@sanity/form-builder/PatchEvent'
import FormField from 'part:@sanity/components/formfields/default'
import Button from 'part:@sanity/components/buttons/default'
import PlusIcon from 'part:@sanity/base/plus-icon'
import {SanityFieldType} from '../types/sanity'
import {uuid} from '@sanity/uuid'
import FormFieldEditor from './FormFieldEditor'
import {ThemeProvider, studioTheme, Stack, Box, Card, Flex} from '@sanity/ui'
import {FormEditorValue} from '../types/forms'
import {List, Item, DragHandle} from 'part:@sanity/components/lists/sortable'

type FormEditorProps = {
  value: FormEditorValue
  type: SanityFieldType
  readOnly: boolean
  onChange: (patchEvent) => void
}

const FormEditor: React.FC<FormEditorProps> = forwardRef(
  (
    {value, type, readOnly, markers, presence, compareValue, onChange}: FormEditorProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const fields = value?.data ?? []

    const onAddNewFieldClicked = () => {
      let data = [
        ...fields,
        {
          _id: uuid().toString(),
          _type: 'string',
          label: '',
          isRequired: false,
        },
      ]
      let patches = [setIfMissing([], [])]

      patches.push(
        set({
          _type: 'formFields',
          data: data,
        })
      )

      onChange(PatchEvent.from(patches))
    }

    const onFormFieldChanged = (data) => {}

    return (
      <ThemeProvider theme={studioTheme}>
        <Button
          size="extra-small"
          icon={PlusIcon}
          bleed={true}
          padding="medium"
          title="Add new field"
          onClick={onAddNewFieldClicked}
        >
          Add field
        </Button>
        <Box paddingTop={2} paddingBottom={2}>
          <FormField
            title="Fields"
            __unstable_markers={markers}
            __unstable_presence={presence}
            compareValue={compareValue}
            ref={ref}
          >
            {fields?.map((f) => {
              return (
                <Card key={f._id} padding={2} shadow={1} marginBottom={3} radius={2}>
                  <Flex>
                    <Box marginRight={1}>
                      <DragHandle paddingX={2} paddingY={3} />
                    </Box>
                    <FormFieldEditor form={f} onChange={onFormFieldChanged} />
                  </Flex>
                </Card>
              )
            })}
          </FormField>
        </Box>
      </ThemeProvider>
    )
  }
)

export default FormEditor
