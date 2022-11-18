import { useEffect, useState } from 'react'

const Expander = ({ content }: { content: string }) => {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    if (content.length > 400) {
      setText(content.slice(0, 400))
      return;
    }

    setText(content)
  }, [content])

  const renderToggler = () => {
    if (text.length > 400) return;

    return (
      <>
        ...<i role="button" onClick={() => setText(content)} className='text-blue-500 text-small'>Lanjutkan</i>
      </>
    )
  }

  return (
    <div>
      {text} {renderToggler()}
    </div>
  )
}

export default Expander