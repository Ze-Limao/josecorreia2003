import type { ReactNode } from "react"

type ContentContainerProps = {
  children: ReactNode
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="w-full lg:ml-[48%] lg:w-[45%] flex-1 overflow-y-auto space-y-12 lg:space-y-16 pb-16 lg:pb-24 p-4">
      {children}
    </div>
  )
}

