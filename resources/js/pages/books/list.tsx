import { Icon } from "@/components/icon";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuGroup, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLayout from "@/layouts/app-layout";
import { Book, BreadcrumbItem, Pagination } from "@/types";
import { Field } from "@headlessui/react";
import { Head, router } from "@inertiajs/react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useForm } from 'laravel-precognition-react';
import { BookXIcon, ChevronLeft, ChevronRight, PencilIcon, PlusIcon, SearchIcon, SettingsIcon, TrashIcon, XIcon } from "lucide-react";
import React, { ChangeEventHandler, FocusEventHandler, FormEventHandler, useCallback } from "react";

type BookPageProps = { books: { data: Book[] } & Pagination }
export default function Books({ books }: BookPageProps) {
  console.log(books)
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Books',
      href: '/books',
    },
  ];
  const [query, setQuery] = React.useState('');
  const deferredQuery = React.useDeferredValue(query);
  const goToNextPage = useCallback(() => {
    if (books.next_page_url) {
      router.get(
        books.next_page_url, { search: deferredQuery }, { preserveState: true, replace: true }
      )
    }
  }, [books, deferredQuery])
  const goToPage = useCallback((url: string) => {
    router.get(url, { search: deferredQuery }, { preserveState: true, replace: true })
  }, [deferredQuery])
  const goToPreviousPage = useCallback(() => {
    if (books.prev_page_url) {
      router.get(
        books.prev_page_url, { search: deferredQuery }, { preserveState: true, replace: true }
      )
    }
  }, [books, deferredQuery])
  React.useEffect(() => {
    const handler = setTimeout(() => {
      router.get('/books', { search: deferredQuery }, { preserveState: true, replace: true });
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [deferredQuery]);
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Books">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <div className=" mx-auto h-screen flex flex-col items-center justify-center bg-background">
        <div className="">
          {/*
          // This is for responsive layouts greater than medium screens since tables are not good enough for mobile
           <table className="hidden md:table text-xs table-auto rounded-2xl overflow-hidden w-full max-w-2xl shadow"> 
           */}
          <table className="text-xs table-auto rounded-t-2xl overflow-hidden min-w-[80vw] shadow">
            <caption className="bg-accent text-accent-foreground text-left p-4">
              <div className="flex gap-2 justify-between items-center">
                <h1 className="text-lg font-semibold">Books</h1>
                <Field>
                  <Label className="relative group">
                    <Input required placeholder="Pesquisar livros" type="text" name="search" value={deferredQuery} onChange={e => setQuery(e.target.value)} className="max-w-64 bg-accent-foreground/20 appearance-none pr-8 hover:bg-accent-foreground/5 transition-colors" />
                    <Icon iconNode={SearchIcon} size={8} className="absolute right-1 top-[50%] -translate-[50%] opacity-0 invisible duration-500 transition-opacity group-has-placeholder-shown:visible group-has-placeholder-shown:opacity-100 " />
                    <Icon iconNode={XIcon} size={8} className="absolute right-1 top-[50%] -translate-[50%] visible duration-500 transition-opacity group-has-placeholder-shown:invisible group-has-placeholder-shown:opacity-0 group-has-autofill:text-emerald-500" />
                  </Label>
                </Field>
                <CreateBookForm />
              </div>
            </caption>
            <thead className="text-center border-b border-foreground/20 bg-accent text-accent-foreground ">
              <tr className="*:p-2 ">
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Description</th>
                <th scope="col">Genre</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className=" *:bg-accent *:even:bg-accent/80">
              {books.data.length > 0 ? books.data.map(book => (
                <tr className="*:p-2 hover:bg-gradient-to-tr from-accent to-primary/10 via-emerald-950/10 hover:cursor-pointer" key={book.ISBN}>
                  <td onClick={
                    (e) => {
                      router.get(
                        `books/${book.ISBN}`
                      )
                    }
                  } scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.title}</td>
                  <td onClick={
                    (e) => {
                      router.get(
                        `books/${book.ISBN}`
                      )
                    }
                  } scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.author}</td>
                  <td onClick={
                    (e) => {
                      router.get(
                        `books/${book.ISBN}`
                      )
                    }
                  } scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.description}</td>
                  <td onClick={
                    (e) => {
                      router.get(
                        `books/${book.ISBN}`
                      )
                    }
                  } scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.genre}</td>
                  <td onClick={
                    (e) => {
                      router.get(
                        `books/${book.ISBN}`
                      )
                    }
                  } scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.release_date}</td>
                  <td className="flex gap-1 items-end justify-center">
                    <DropdownMenu modal={false}>
                      <DropdownMenuTrigger className="animate-fadeInLeft duration-700">
                        <div className="h-9 w-9 flex items-center justify-center rounded-full duration-200 p-2 hover:cursor-pointer hover:bg-accent-foreground/5 hover:animate-swing ">
                          <Icon iconNode={SettingsIcon} />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuGroup>
                        <DropdownMenuContent >
                          <DropdownMenuItem>
                            <>
                              <Icon iconNode={PencilIcon} size={9} />
                              <span className="">
                                Editar
                              </span>
                            </>
                          </DropdownMenuItem>
                          <DropdownMenuItem variant="destructive">
                            <>
                              <Icon iconNode={TrashIcon} size={9} />
                              <span className="">
                                Remover
                              </span>
                            </>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenuGroup>
                    </DropdownMenu>
                  </td>
                </tr>
              )) :
                <tr>
                  <td colSpan={6} className="text-center p-8">
                    <h3 className="text-3xl flex flex-col items-center">
                      <BookXIcon size={64} />
                      Nenhum livro encontrado.
                    </h3>
                    <p className="text-muted-foreground">
                      Não encontramos nenhum livro no momento que tal criar um novo? Basta clicar no botão "Adicionar um livro"
                    </p>

                  </td>
                </tr>
              }
            </tbody>
          </table>
          <div className="text-center bg-accent text-accent-foreground border-t border-foreground/20 min-w-[80vw] rounded-b-2xl px-4 grid grid-cols-6 items-center">
            <p>
              Pagination
            </p>
            <div className="flex items-center justify-center gap-4">
              {
                books.links.map(l => (
                  <button data-active={l.active} onClick={() => goToPage(l.url)} className="text-xs border rounded h-6 w-6 font-medium transition-colors data-[active='true']:text-sky-900 data-[active='true']:bg-sky-300 hover:bg-sky-300 border-transparent hover:text-sky-900 active:bg-sky-900 active:text-sky-300 active:border-sky-300">
                    <span dangerouslySetInnerHTML={{ __html: l.label }} />
                  </button>
                )).slice(Math.max(books.current_page - 3, 1), Math.min(books.current_page + 3, books.links.length - 1))
              }
            </div>
            <div className="flex items-center gap-8 col-span-4">
              <div >
                <button disabled={books.current_page === 1} className="p-4 w-full flex justify-evenly text-center hover:not-disabled:opacity-50 hover:not-disabled:cursor-pointer disabled:opacity-10" onClick={goToPreviousPage}>
                  <Icon iconNode={ChevronLeft} size={8} />
                  <span className="text-xs sr-only sm:not-sr-only">
                    Anterior
                  </span>
                </button>
              </div>
              <div className="text-center">
                <strong>{Math.min(books.per_page * books.current_page, books.total)} de {books.total}</strong>
              </div>
              <div >
                <button disabled={!Boolean(books.next_page_url)} className="p-4 w-full flex justify-evenly text-center hover:not-disabled:opacity-50 hover:not-disabled:cursor-pointer disabled:opacity-10" onClick={goToNextPage}>
                  <span className="text-xs sr-only sm:not-sr-only">
                    Próximo
                  </span>
                  <Icon iconNode={ChevronRight} size={8} />
                </button>
              </div>
            </div>
          </div>
          {
            // Section for mobile view. Tables are not good enough for working in that case.
            /* <article className="grid grid-cols-2 md:hidden">
              <dt>
                Title:
              </dt>
              <dd>
   
              </dd>
            </article> */
          }
        </div>
      </div>
    </AppLayout >
  );
}
type CreateBookFormProps = {

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
const CreateBookForm: React.FC<CreateBookFormProps> = () => {
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
        closeModal()
      }
    });
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setData(
      e.target.name as keyof CreateBookForm,
      e.target.type === 'date' ? new Date(e.target.value).toISOString() : e.target.value
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
        <Button size={"sm"}>
          <Icon iconNode={PlusIcon} size={8} />
          Adicionar um livro
        </Button>
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
            <Input value={data.release_date} onChange={onChange} onBlur={onBlur} placeholder="Insira o titulo do livro" name="release_date" id="release_date" />
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
            <Button type="submit" disabled={processing} >
              {processing ? "Carregando..." : "Criar livro"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}