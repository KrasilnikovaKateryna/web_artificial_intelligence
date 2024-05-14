import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Neural Networks',
    Svg: require('@site/static/img/bitconnect-svgrepo-com.svg').default,
    description: (
      <>
          Early work with neural networks stirs excitement for “thinking machines.”
      </>
    ),
  },
  {
    title: 'Machine Learning',
    Svg: require('@site/static/img/machine-learning-01-svgrepo-com.svg').default,
    description: (
      <>
          Machine learning becomes popular.
      </>
    ),
  },
  {
    title: 'Present Day',
    Svg: require('@site/static/img/chip-svgrepo-com.svg').default,
    description: (
      <>
          Generative AI, a disruptive tech, soars in popularity.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
