import {
  Action,
  ActionPanel,
  Detail,
  Icon,
  showToast,
  Toast,
} from '@raycast/api'
import { Clipboard } from '@raycast/api'
import { useTodosDoneToday } from '@/services/notion/hooks/use-todos-done-today'
import { useFilter } from '@/services/notion/hooks/use-filter'

export function DoneWork() {
  const { filterTodo } = useFilter()
  const { markdown, isLoading } = useTodosDoneToday(filterTodo)

  const handleCopyDoneWork = async () => {
    await Clipboard.copy(markdown)
    showToast(Toast.Style.Success, 'Copied to clipboard')
  }

  return (
    <Detail
      isLoading={isLoading}
      markdown={markdown}
      actions={
        <ActionPanel>
          <Action
            title="Copy to Clipboard"
            onAction={handleCopyDoneWork}
            icon={Icon.Clipboard}
          />
        </ActionPanel>
      }
    />
  )
}
