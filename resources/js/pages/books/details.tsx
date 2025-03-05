import AppLayout from "@/layouts/app-layout";
import { Book, BreadcrumbItem } from "@/types"

type BookDetailProps = {
  book: Book
}
export default function BookDetail({ book }: BookDetailProps) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Books',
      href: '/books',
    },
    {
      title: `Books/${book.ISBN}`,
      href: '/books',
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <article>
        {book.url_cover
          ? <img src={book.url_cover} />
          : <img src={`https://covers.openlibrary.org/b/isbn/${book.ISBN}-L.jpg`} />
        }
        <h3>
          {book.title}
        </h3>
        <p>
          {book.description}
        </p>
        <p>
          {book.author}
        </p>
        <p>
          {book.genre}
        </p>
        <p>
          {book.publisher}
        </p>
        <p>
          {book.release_date}
        </p>
      </article>
    </AppLayout>
  )
}