/* eslint-disable react/no-children-prop */
import { BookOpen, CaretDown, PencilLine } from 'phosphor-react'
import { useState } from 'react'
import type { Highlight } from '../../lib/networking/fragments/highlightFragment'
import { LabelChip } from '../elements/LabelChip'
import {
  Box,
  VStack,
  Blockquote,
  SpanBox,
  HStack,
} from '../elements/LayoutPrimitives'
import { styled } from '../tokens/stitches.config'
import { HighlightViewNote } from './HighlightNotes'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type HighlightViewProps = {
  highlight: Highlight
  author?: string
  title?: string
  updateHighlight: (highlight: Highlight) => void
}

const StyledQuote = styled(Blockquote, {
  margin: '0px 0px 0px 0px',
  fontSize: '18px',
  lineHeight: '27px',
})

export function HighlightView(props: HighlightViewProps): JSX.Element {
  const [noteMode, setNoteMode] = useState<'preview' | 'edit'>('preview')

  return (
    <HStack
      css={{
        width: '100%',
        height: '100%',
        alignItems: 'stretch',

        background: '$thBackground',
        borderRadius: '6px',
        boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)',
      }}
      //   <Box
      //   css={{
      //     width: '100%',
      //     height: '100%',
      //     padding: '10px',
      //     background: '$thBackground',
      //     borderRadius: '6px',
      //     boxShadow: '0px 4px 4px rgba(33, 33, 33, 0.1)',
      //   }}
      // >
    >
      <VStack
        css={{
          minHeight: '100%',
          width: '10px',
          pt: '15px',
          pl: '10px',
        }}
      >
        <CaretDown size={15} color="#898989" weight="fill" />
        <Box
          css={{
            width: '2px',
            flexGrow: '1',
            background: '#FFD234',
            marginTop: '5px',
            marginLeft: '6px',
            flex: '1',
            marginBottom: '10px',
          }}
        />
      </VStack>
      <VStack
        css={{
          width: '100%',
          padding: '10px',
          paddingLeft: '20px',
        }}
      >
        <StyledQuote>
          <SpanBox
            css={{
              '> *': {
                m: '0px',
              },
              fontSize: '15px',
              lineHeight: 1.5,
              color: '$grayText',
              img: {
                display: 'block',
                margin: '0.5em auto !important',
                maxWidth: '100% !important',
                height: 'auto',
              },
            }}
          >
            <ReactMarkdown
              children={props.highlight.quote ?? ''}
              remarkPlugins={[remarkGfm]}
            />
          </SpanBox>
        </StyledQuote>
        <Box css={{ display: 'block', pt: '5px' }}>
          {props.highlight.labels?.map(({ name, color }, index) => (
            <LabelChip key={index} text={name || ''} color={color} />
          ))}
        </Box>
        <HStack
          css={{ width: '100%', height: '100%', pt: '15px' }}
          alignment="start"
          distribution="start"
        >
          <HighlightViewNote
            text={props.highlight.annotation}
            placeHolder="Add notes to this highlight..."
            highlight={props.highlight}
            sizeMode={'normal'}
            mode={noteMode}
            setEditMode={setNoteMode}
            updateHighlight={props.updateHighlight}
          />
          <SpanBox
            css={{
              lineHeight: '1',
              marginLeft: '20px',
              marginTop: '15px',
              cursor: 'pointer',
              borderRadius: '1000px',
              '&:hover': {
                background: '#EBEBEB',
              },
            }}
            onClick={(event) => {
              setNoteMode(noteMode == 'preview' ? 'edit' : 'preview')
              event.preventDefault()
            }}
          >
            {noteMode === 'edit' ? (
              <BookOpen size={15} color="#898989" />
            ) : (
              <PencilLine size={15} color="#898989" />
            )}
          </SpanBox>
        </HStack>
      </VStack>
    </HStack>
  )
}
