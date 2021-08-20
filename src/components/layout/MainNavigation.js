import { useContext } from 'react'
import FavoritesContext from '../../store/favorites.context'
import styles from './MainNavigation.module.css'
//Link to pass URL but not reloading the page like href does
import { Link } from "react-router-dom"

const MainNavigation = props => {
  const favoritesCtx = useContext(FavoritesContext);

    return (
      <header className={styles.header}>
        <div className={styles.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to='/' className={styles.badge}>
                All Meetups
              </Link>
            </li>
            <li>
              <Link to='/new-meetup' className={styles.badge}>
                New Meetups
              </Link>
            </li>
            <li>
              <Link to='/favorite' className={styles.badge}>
                My Favorites
                <span className={styles.badge}>{favoritesCtx.totalFavorites}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigation