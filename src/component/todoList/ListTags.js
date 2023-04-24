function ListTags (props) {
    const { filterType, onFilterChange } = props
    const tabs = [
      { key: 'all', title: 'ALL' },
      { key: 'wait', title: 'PENDING' },
      { key: 'active', title: 'DONE' }
    ]
    const cssSet = (type) => {
      return filterType === type ? 'active' : ''
    }
  
    return (
      <ul className="flex">
        { tabs.map(tab => {
          return (
            <li key={ tab.key } className="w-full">
              <button className={ cssSet(tab.key)+' w-full border-b-2 border-neutral-300 text-neutral-400 hover:text-neutral-600 font-bold text-center p-4' } 
              onClick={ () => onFilterChange(tab.key) }>
                { tab.title }
              </button>
            </li>
          )
        }) }
      </ul>
    )
  }
  
  export default ListTags