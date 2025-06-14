import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    marginTop: 'auto',
    color: '#888',
    fontSize: '0.9em',
};

const iconStyle = {
    color: '#aaa',
    margin: '0 15px',
    fontSize: '1.6em',
};

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div>
                <a
                    href='https://github.com/glhkang'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='GitHub'
                >
                    <FontAwesomeIcon icon={faGithub} style={iconStyle} />
                </a>

                <a
                    href='https://www.linkedin.com/in/glhkang'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='LinkedIn'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} style={iconStyle} />
                </a>

                <a
                    href='https://glhkang.github.io/'
                    target='_blank'
                    rel='noopener noreferrer'
                    title='Portfolio'
                >
                    <FontAwesomeIcon icon={faGlobe} style={iconStyle} />
                </a>
            </div>
            <p style={{ marginTop: '10px' }}>
                © {new Date().getFullYear()} Gloria Kang
            </p>
        </footer>
    );
}
