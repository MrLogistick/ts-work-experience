import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/levels')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/levels"!</div>
}
