import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

interface PanelProps {
  title: string;
  children: React.ReactNode
}

const Panel: React.FC<PanelProps> = ({ title, children }) => {
  const [toggle, setToggle] = useState<boolean>(true)

  const renderContent = () => {
    if (!toggle) return null;
    return children
  }

  return (
    <div className="py-4 content-menu_ingredients">
      <div className="flex items-center justify-between panel">
        <p className="text-lg font-bold title">{title}</p>
        {
          toggle
            ? <ChevronUpIcon role="button" onClick={() => setToggle(!toggle)} className="w-4 h-4"  />
            : <ChevronDownIcon role="button" onClick={() => setToggle(!toggle)} className="w-4 h-4" />
        }
      </div>
      {renderContent()}
    </div>
  )
}

export default Panel