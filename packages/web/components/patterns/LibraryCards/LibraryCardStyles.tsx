import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useMemo } from 'react'
import { LibraryItemNode } from '../../../lib/networking/queries/useGetLibraryItemsQuery'
import { Box, SpanBox } from '../../elements/LayoutPrimitives'

dayjs.extend(relativeTime)

export const MetaStyle = {
  width: '100%',
  color: '$thTextSubtle3',
  fontSize: '13px',
  fontWeight: '400',
  fontFamily: '$display',
}

export const MenuStyle = {
  display: 'flex',
  marginLeft: 'auto',
  height: '30px',
  width: '150px',
  mt: '-5px',
  mr: '-5px',
  pt: '2px',
  alignItems: 'center',
  justifyContent: 'center',
}

export const TitleStyle = {
  color: '$thTextContrast2',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '1.25',
  fontFamily: '$display',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
}

export const DescriptionStyle = {
  color: '$thTextSubtle',
  pt: '10px',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '140%',
  fontFamily: '$display',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
  height: '45px',
  alignItems: 'start',
  maxWidth: '-webkit-fill-available',
}

export const AuthorInfoStyle = {
  maxLines: '1',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '240px',
  overflow: 'hidden',
  height: '21px',
  color: '$thTextSubtle3',
  fontSize: '13px',
  fontWeight: '400',
  fontFamily: '$display',
}

export const timeAgo = (date: string | undefined): string => {
  if (!date) {
    return ''
  }
  return dayjs(date).fromNow()
}

const shouldHideUrl = (url: string): boolean => {
  try {
    const origin = new URL(url).origin
    const hideHosts = ['https://storage.googleapis.com', 'https://omnivore.app']
    if (hideHosts.indexOf(origin) != -1) {
      return true
    }
  } catch {
    console.log('invalid url item', url)
  }
  return false
}

export const siteName = (
  originalArticleUrl: string,
  itemUrl: string
): string => {
  if (shouldHideUrl(originalArticleUrl)) {
    return ''
  }
  try {
    return new URL(originalArticleUrl).hostname.replace(/^www\./, '')
  } catch {}
  try {
    return new URL(itemUrl).hostname.replace(/^www\./, '')
  } catch {}
  return ''
}

type LibraryItemMetadataProps = {
  item: LibraryItemNode
  showProgress?: boolean
}

export function LibraryItemMetadata(
  props: LibraryItemMetadataProps
): JSX.Element {
  const highlightCount = useMemo(() => {
    return props.item.highlights?.length ?? 0
  }, [props.item.highlights])

  return (
    <Box>
      {timeAgo(props.item.savedAt)}
      {` `}
      {props.item.wordsCount ?? 0 > 0
        ? `  • ${Math.max(
            1,
            Math.round((props.item.wordsCount ?? 0) / 235)
          )} min read`
        : null}
      {(props.showProgress && props.item.readingProgressPercent) ?? 0 > 0 ? (
        <>
          {`  • `}
          <SpanBox css={{ color: '#55B938' }}>
            {`${Math.round(props.item.readingProgressPercent)}%`}
          </SpanBox>
        </>
      ) : null}
      {highlightCount > 0
        ? `  • ${highlightCount} highlight${highlightCount > 1 ? 's' : ''}`
        : null}
    </Box>
  )
}

type CardCheckBoxProps = {
  isChecked: boolean
  handleChanged: () => void
}

export function CardCheckbox(props: CardCheckBoxProps): JSX.Element {
  return (
    <input
      type="checkbox"
      checked={props.isChecked}
      onChange={props.handleChanged}
    ></input>
  )
}
