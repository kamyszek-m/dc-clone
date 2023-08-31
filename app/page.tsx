import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <p className='text-3xl font-bold text-indigo-500'>
        Hi disc clone
      </p>
      <Button variant="test" className="bg-indigo-500">
        Click me
      </Button>
    </div>
  )
}
