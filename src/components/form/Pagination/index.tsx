import { useState } from "react";
import {
  SectionPagination,
  PaginationButton,
  PaginationItem,
  ButtonPagination,
} from "./styles";

interface PageProps {
  page: number[];
  setPage: number[];
}

export default function Pagination({ page, setPage }: PageProps) {
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([0, 1, 2, 3, 4, 5]);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <SectionPagination>
      <PaginationButton>
        <ButtonPagination
          type="button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage < 1}
          isActive={currentPage < 1}
        >
          Voltar
        </ButtonPagination>
        {page.map(pagess => (
          <PaginationItem
            isSelect={pagess === currentPage}
            key={pagess}
            onClick={() => setCurrentPage(pagess)}
            disabled={pagess === currentPage}
          >
            {pagess + 1}
          </PaginationItem>
        ))}
        <ButtonPagination
          type="button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === page.length - 1}
          isActive={currentPage === page.length - 1}
        >
          Avançar
        </ButtonPagination>
      </PaginationButton>
    </SectionPagination>
  );
}
