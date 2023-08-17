
interface PaginationProps{
    pages:number,
    currentPage:number,
    itemsPerPage:number,
    setCurrentPage:(page:number)=>void,

}

const PaginationComponent:React.FC<PaginationProps> = ({pages, currentPage,itemsPerPage, setCurrentPage}) =>{
    const goToPage = (page:number) => {
        setCurrentPage(page)
    }

    return(
        <div className="flex gap-3 justify-center mt-4">
			<button 
				onClick={(e) => goToPage(0)}
				disabled={currentPage == 0}
			>&#171;</button>
			<button
				onClick={(e) => goToPage(currentPage - 1)}
				disabled={currentPage == 0}
			>&lt;</button>
            <span>{(currentPage * itemsPerPage) + 1}-{(currentPage + 1) * (itemsPerPage)} de {itemsPerPage * pages}</span>
			<button
				onClick={(e) => goToPage(currentPage + 1)}
				disabled={currentPage == (pages - 1)}
			>&gt;</button>
			<button
				onClick={(e) => goToPage(pages - 1)}
				disabled={currentPage == (pages - 1)}
			>&#187;</button>
		</div>
    )
}

export default PaginationComponent