import PropTypes from 'prop-types';
import styles from './common-layout.module.css';

const pageRelatedData = {
  home: {
    heading: 'Welcome To Our Page',
    description: (
      <div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis similique
          excepturi, a sapiente reiciendis illo eos ipsam dolorem natus unde architecto magnam,
          dolore nostrum id. Ipsa accusamus molestias soluta! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat debitis similique excepturi, a sapiente reiciendis illo eos
          ipsam dolorem natus unde architecto magnam, dolore nostrum id. Ipsa accusamus molestias
          soluta!
        </p>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis similique
          excepturi, a sapiente reiciendis illo eos ipsam dolorem natus unde architecto magnam,
          dolore nostrum id. Ipsa accusamus molestias soluta! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat debitis similique excepturi, a sapiente reiciendis illo eos
          ipsam dolorem natus unde architecto magnam, dolore nostrum id. Ipsa accusamus molestias
          soluta!
        </p>
      </div>
    ),
  },
  calculator: {
    heading: 'Let\'s Do Some Math',
    description: '',
  },
  quote: {
    heading: '',
    description: (
      <blockquote cite="http://www.worldwildlife.org/who/index.html">
        <span className={styles.quotes}>&ldquo;</span>
        It is better to solve one problem five
        different ways than to solve five problems one way.
        <span className={styles.quotes}>&rdquo;</span>
      </blockquote>

    ),
  },
};

const CommonLayout = ({
  children, className,
}) => (
  <main className={`${className} ${styles.mainStyle}`}>
    <div className={styles.details}>
      <h2 className={styles.heading}>{pageRelatedData[className].heading}</h2>
      <div className={`${styles.description} ${styles[`descripition-${className}`]}`}>{pageRelatedData[className].description}</div>
    </div>
    {children}
  </main>
);

CommonLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default CommonLayout;
