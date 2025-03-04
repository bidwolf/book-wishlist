import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenu, DropdownMenuItem, DropdownMenuGroup, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field } from "@headlessui/react";
import { Head } from "@inertiajs/react";
import { ChevronLeft, ChevronRight, PencilIcon, SearchIcon, SettingsIcon, TrashIcon, XIcon } from "lucide-react";
enum Genres {
  ROMANCE = "Romance",
  FICTION = "Fiction",
  EDUCATION = "Education"
}
type Book = {
  id: number
  title: string
  description: string
  genre: Genres
  year: number
  author: string
};
const mockBooks: Book[] = [
  { id: 1, title: "Livro Um", author: "Bidwolf", description: "Descrição dasdnahksjdhaskdjhasdkjahskdjalsjdlkajsdklasjdlaksdjasdlkadsaksldjalksdjadsklsadjo Livro Um", year: 1994, genre: Genres.EDUCATION },
  { id: 2, title: "Livro Dois", author: "Bidwolf", description: "Descrição do Livro Dois", year: 1994, genre: Genres.FICTION },
  { id: 3, title: "Livro Três", author: "Bidwolf", description: "Descrição do Livro Três", year: 1994, genre: Genres.ROMANCE },
  { id: 4, title: "Livro Quatro", author: "Bidwolf", description: "Descrição do Livro Quatro", year: 1994, genre: Genres.ROMANCE },
];
export default function page() {
  return (
    <>
      <Head title="Books">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>
      <div className="@container mx-auto h-screen flex flex-col items-center justify-center bg-background">
        <div className="@min-2xs:mx-4">
          <table className="hidden md:table text-xs table-auto rounded-2xl overflow-hidden w-full max-w-2xl">
            <caption className="bg-emerald-950 text-accent-foreground text-left p-4 border-b-1 border-black/15 ">
              <div className="flex gap-2 justify-between items-center">
                <h1 className="text-lg font-semibold">Books</h1>
                <Field>
                  <Label className="relative group">
                    <Input required placeholder="Pesquisar livros" type="text" name="search" className="w-64 bg-accent-foreground/20 appearance-none pr-8 hover:bg-accent-foreground/5 transition-colors" />
                    <Icon iconNode={SearchIcon} size={8} className="absolute right-1 top-[50%] -translate-[50%] opacity-0 invisible duration-500 transition-opacity group-has-placeholder-shown:visible group-has-placeholder-shown:opacity-100 " />
                    <Icon iconNode={XIcon} size={8} className="absolute right-1 top-[50%] -translate-[50%] visible duration-500 transition-opacity group-has-placeholder-shown:invisible group-has-placeholder-shown:opacity-0 group-has-autofill:text-emerald-500" />
                  </Label>
                </Field>
                <Button size={"sm"}>
                  Adicionar um livro
                </Button>
              </div>
            </caption>
            <thead className="text-center bg-emerald-900 text-zinc-100 ">
              <tr className="*:p-2">
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Description</th>
                <th scope="col">Genre</th>
                <th scope="col">Year</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className=" *:bg-accent *:even:bg-accent/80">
              {mockBooks.map(book => (
                <tr className="*:p-2" key={book.id}>
                  <td scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.title}</td>
                  <td scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.author}</td>
                  <td scope="row" className="text-left animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.description}</td>
                  <td scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.genre}</td>
                  <td scope="row" className="text-center animate-fadeInLeft duration-700 text-ellipsis max-w-64 overflow-hidden whitespace-nowrap">{book.year}</td>
                  <td className="flex gap-1 items-center justify-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="animate-fadeInLeft duration-700">
                        <Button variant={"ghost"} className="h-9 w-9 rounded-full duration-200 p-2 hover:cursor-pointer hover:bg-accent-foreground/5 hover:animate-swing ">
                          <Icon iconNode={SettingsIcon} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuGroup>
                        <DropdownMenuContent className="">
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
              ))}
            </tbody>
            <tfoot className="text-center bg-emerald-900 text-zinc-100">
              <tr>
                <th scope="row" colSpan={1}>
                  Pagination
                </th>
                <td >
                  <Button variant={"ghost"} className="hover:bg-primary/10">
                    <Icon iconNode={ChevronLeft} size={8} />
                    <span className="text-xs sr-only sm:not-sr-only">
                      Previous
                    </span>
                  </Button>
                </td>
                <td >
                  Page 1 of 2
                </td>
                <td >
                  <Button variant={"ghost"} className="hover:bg-primary/10">
                    <span className="text-xs sr-only sm:not-sr-only">
                      Next
                    </span>
                    <Icon iconNode={ChevronRight} size={8} />
                  </Button>

                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
            </tfoot>
          </table>
          <article className="grid grid-cols-2 md:hidden">
            <dt>
              Title:
            </dt>
            <dd>

            </dd>
          </article>
        </div>
      </div>
    </>
  );
}