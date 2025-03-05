import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuGroup, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLayout from "@/layouts/app-layout";
import { Book, BreadcrumbItem } from "@/types";
import { Field } from "@headlessui/react";
import { Head, router } from "@inertiajs/react";
import { BookXIcon, ChevronLeft, ChevronRight, PencilIcon, PlusIcon, SearchIcon, SettingsIcon, TrashIcon, XIcon } from "lucide-react";
import { useCallback } from "react";

type BookPageProps = { books: Book[], total_pages: number }
export default function Books({ books, total_pages }: BookPageProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Books',
      href: '/books',
    },
  ];
  let params = new URLSearchParams(window.location.search)
  const goToNextPage = useCallback(() => {
    const currentPage = Number(params.get('page') || 1)
    router.get(
      `/books?page=${currentPage + 1}`
    )
  }, [params, router])
  const goToPreviousPage = useCallback(() => {
    const currentPage = Number(params.get('page') || 1)
    router.get(
      `/books?page=${currentPage - 1}`
    )
  }, [params, router])
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
          <table className="text-xs table-auto rounded-2xl overflow-hidden min-w-[80vw] shadow">
            <caption className="bg-accent text-accent-foreground text-left p-4">
              <div className="flex gap-2 justify-between items-center">
                <h1 className="text-lg font-semibold">Books</h1>
                <Field>
                  <Label className="relative group">
                    <Input required placeholder="Pesquisar livros" type="text" name="search" className="max-w-64 bg-accent-foreground/20 appearance-none pr-8 hover:bg-accent-foreground/5 transition-colors" />
                    <Icon iconNode={SearchIcon} size={8} className="absolute right-1 top-[50%] -translate-[50%] opacity-0 invisible duration-500 transition-opacity group-has-placeholder-shown:visible group-has-placeholder-shown:opacity-100 " />
                    <Icon iconNode={XIcon} size={8} className="absolute right-1 top-[50%] -translate-[50%] visible duration-500 transition-opacity group-has-placeholder-shown:invisible group-has-placeholder-shown:opacity-0 group-has-autofill:text-emerald-500" />
                  </Label>
                </Field>
                <Button size={"sm"}>
                  <Icon iconNode={PlusIcon} size={8} />
                  Adicionar um livro
                </Button>
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
              {books.length > 0 ? books.map(book => (
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
            <tfoot className="text-center bg-accent text-accent-foreground border-t border-foreground/20">
              <tr>
                <th scope="row" colSpan={1}>
                  Pagination
                </th>
                <td />
                <td >
                  <button disabled={Number(params.get("page") || 1) <= 1} className="p-4 w-full flex justify-evenly text-center hover:not-disabled:opacity-50 hover:not-disabled:cursor-pointer disabled:opacity-10" onClick={goToPreviousPage}>
                    <Icon iconNode={ChevronLeft} size={8} />
                    <span className="text-xs sr-only sm:not-sr-only">
                      Previous
                    </span>
                  </button>
                </td>
                <td className="text-center">
                  <strong>Page {params.get("page") || 1} of {total_pages}</strong>
                </td>
                <td >
                  <button disabled={Number(params.get("page") || 1) >= total_pages} className="p-4 w-full flex justify-evenly text-center hover:not-disabled:opacity-50 hover:not-disabled:cursor-pointer disabled:opacity-10" onClick={goToNextPage}>
                    <span className="text-xs sr-only sm:not-sr-only">
                      Next
                    </span>
                    <Icon iconNode={ChevronRight} size={8} />
                  </button>
                </td>
                <td />
              </tr>
            </tfoot>
          </table>
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
    </AppLayout>
  );
}