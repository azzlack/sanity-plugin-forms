export const API_VERSION = '1'
export const PANEL_HEIGHT = 32 // px
export const FORM_DOCUMENT_NAME = 'forms.form'
export const FORMS_PANEL_WIDTH = 250 // px
// NOTE: Manually set plugin z-index values to be higher than Sanity's header search field
// (which is currently 500202). Also ensure toasts always sit above dialogs.
export const Z_INDEX_APP = 600000
export const Z_INDEX_DIALOG = 600001
export const Z_INDEX_TOAST_PROVIDER = 600002
