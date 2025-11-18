const NavItem = ({itemTitle}) => {
    return (
      <li
        onClick={() => alert(`Item ${itemTitle}`)}
        className="nav-item btn btn-danger mx-1 border-warning">{itemTitle}</li>
    )
}

export default NavItem;