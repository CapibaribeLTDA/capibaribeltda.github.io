import { PRIVACY_DOCUMENT } from '@/lib/privacidade'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Privacy() {
  return (
    <div>
        <ReactMarkdown>{PRIVACY_DOCUMENT}</ReactMarkdown>
    </div>
  )
}
