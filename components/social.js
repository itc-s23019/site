import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <span href='https://twitter.com/'>
          <FontAwesomeIcon icon={faTwitter} />
          <span className='sr-only'>Twitter</span>
        </span>
      </li>
      <li>
        <span href='https://www.facebook.com/'>
          <FontAwesomeIcon icon={faFacebookF} />
          <span className='sr-only'>Facebook</span>
        </span>
      </li>
      <li>
        <span className='https://github.com/'>
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>Github</span>
        </span>
      </li>
    </ul>
  )
}

export default Social
