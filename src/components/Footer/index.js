import styles from './Footer.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

const iconsProps = {
  color: 'white',
  size: 24,
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconsProps} />
        <FaTwitter {...iconsProps} />
        <FaInstagram {...iconsProps} />
      </div>
      <span>
        Desenvolvido por Edegan.
      </span>
    </footer>
  )
}