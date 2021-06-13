export type SanityFieldType = {
  title: string;
  description: string;
}

export type SanityCustomAssetSourceProps = {
  document?: SanityDocument
  onClose?: () => void
  onSelect?: () => void
  selectedAssets?: (SanityAssetDocument | SanityImageAssetDocument)[]
  tool?: string
}
