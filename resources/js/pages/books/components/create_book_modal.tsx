import InputError from "@/components/input-error"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { router } from "@inertiajs/react"
import { useForm } from "laravel-precognition-react"
import { VerifiedIcon } from "lucide-react"
import React, { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react"
import { toast } from "sonner"

type CreateBookFormProps = {
  trigger: React.ReactNode
}
type CreateBookForm = {
  title: string
  description: string
  genre: string
  release_date: string
  author: string
  ISBN: string
  publisher: string
}
export const CreateBookForm: React.FC<CreateBookFormProps> = ({ trigger }) => {
  const { data, setData, submit, processing, validate, errors, reset } = useForm<CreateBookForm>(
    'post', '/books/create',
    {
      author: '',
      description: '',
      genre: '',
      ISBN: '',
      publisher: '',
      title: '',
      release_date: ''
    })
  const [openModal, setOpenModal] = React.useState(false)
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    submit({
      onSuccess: () => {
        toast("Livro criado com sucesso!", {
          icon: <VerifiedIcon />
        })
        closeModal()
      }
    });
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setData(
      e.target.name as keyof CreateBookForm,
      e.target.value
    )
  }
  const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    validate(
      e.target.name as keyof CreateBookForm
    )
  }
  const closeModal = () => {
    reset();
    setOpenModal(false)
    router.reload({
      replace: true
    })
  }
  return (
    <Dialog open={openModal} onOpenChange={open => setOpenModal(open)}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Crie um livro
        </DialogTitle>
        <DialogDescription>
          Sua livraria só vai estar completa depois de adicionar seus livros favoritos!
        </DialogDescription>

        <form onSubmit={onSubmit} className="grid grid-cols-3">

          <div className="col-span-full">
            <Label htmlFor="title">title</Label>
            <Input value={data.title} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="title" id="title" />
          </div>
          <InputError message={errors.title} className="col-span-full" />
          <div className="col-span-full">
            <Label htmlFor="description">description</Label>
            <Input value={data.description} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="description" id="description" multiple />
          </div>
          <InputError message={errors.description} className="col-span-full" />
          <div className="col-span-full">
            <Label htmlFor="genre">genre</Label>
            <Input value={data.genre} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="genre" id="genre" />
          </div>
          <InputError message={errors.genre} className="col-span-full" />
          <div className="col-span-full">
            <Label htmlFor="release_date">release_date</Label>
            <Input value={data.release_date} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="release_date" id="release_date" type="date" className="appearance-none" />
          </div>
          <InputError message={errors.release_date} className="col-span-full" />
          <div className="col-span-full">
            <Label htmlFor="author">author</Label>
            <Input value={data.author} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="author" id="author" />
          </div>
          <InputError message={errors.author} className="col-span-full" />
          <div className="col-span-full">
            <Label htmlFor="ISBN">ISBN</Label>
            <Input value={data.ISBN} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="ISBN" id="ISBN" />
          </div>
          <InputError message={errors.ISBN} className="col-span-full" />
          <div className="col-span-full">
            <Label htmlFor="publisher">publisher</Label>
            <Input value={data.publisher} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="publisher" id="publisher" />
          </div>
          <InputError message={errors.publisher} className="col-span-full" />
          <DialogFooter className="col-span-full">
            <Button type="submit" disabled={processing} variant={"ghost"} className="bg-sky-300 text-sky-950 hover:bg-sky-200 active:bg-sky-200 transition-colors active:text-sky-800 hover:text-sky-800" >
              {processing ? "Carregando..." : "Criar livro"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}