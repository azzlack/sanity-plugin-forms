import React, {forwardRef, Ref} from 'react'
import {Box, Portal, ThemeProvider, ToastProvider, studioTheme, PortalProvider} from '@sanity/ui'
import {SanityCustomAssetSourceProps} from '../types/sanity'
import Browser from './Browser'
import {Z_INDEX_APP, Z_INDEX_TOAST_PROVIDER} from '../constants'

type Props = SanityCustomAssetSourceProps

const FormsProwser: React.FC<Props> = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
  const {onClose, onSelect, tool} = props

  return (
    <ThemeProvider scheme="light" theme={studioTheme}>
      <PortalProvider element={document.body}>
        <ToastProvider zOffset={Z_INDEX_TOAST_PROVIDER}>
          {tool ? (
            <Box ref={ref} style={{height: '100%', position: 'relative'}}>
              <Browser onClose={onClose} />
            </Box>
          ) : (
            <Portal>
              <Box
                ref={ref}
                style={{
                  bottom: 0,
                  height: 'auto',
                  left: 0,
                  position: 'fixed',
                  top: 0,
                  width: '100%',
                  zIndex: Z_INDEX_APP,
                }}
              >
                <Browser onClose={onClose} />
              </Box>
            </Portal>
          )}
        </ToastProvider>
      </PortalProvider>
    </ThemeProvider>
  )
})

export default FormsProwser
