import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Book } from "@/types"
import { router, useForm } from "@inertiajs/react"
import React, { FormEventHandler } from "react"

type DeleteBookFormProps = {
  trigger: React.ReactNode,
  book: Book
}
export const DeleteBookForm: React.FC<DeleteBookFormProps> = ({ trigger, book }) => {
  const [openModal, setOpenModal] = React.useState(false)
  const { data, setData, delete: destroy, processing, errors, reset } = useForm({ id: "" })
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    destroy(route('books.destroy', book.id), {
      preserveScroll: true, onError: (error) => {
        window.alert(error)
      }
    })
  }
  const closeModal = () => {
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
          Deseja realmente deletar o livro {book.title}?
        </DialogTitle>
        <DialogDescription>
          Essa ação não poderá ser desfeita.
        </DialogDescription>

        <form onSubmit={onSubmit} className="grid grid-cols-3">
          <DialogFooter className="col-span-full">
            <Button type="submit" variant={"destructive"} disabled={processing} >
              {processing ? "Carregando..." : "Excluir livro"}
            </Button>
            <Button type="button" variant={"ghost"} onClick={closeModal}>
              Cancelar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}