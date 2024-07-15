import { Link } from "react-router-dom";
import SearchOrder from "../features/orders/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to={'/'}>Fast React Pizza Co.</Link>
      <SearchOrder />
    </header>
  )
}
